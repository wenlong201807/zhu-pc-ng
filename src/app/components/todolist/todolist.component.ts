import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
public historyList:Array<any> = []
public keyword:string = ''

  constructor() { }

  ngOnInit() {
  }

  doSearch(){
    console.log(this.keyword)
    // this.historyList.includes(this.keyword) || this.historyList.push(this.keyword)
    if(this.historyList.indexOf(this.keyword) ==-1){
      this.historyList.push(this.keyword)
      this.keyword = ''
    }else{
      alert('内容存在，重试')
      this.keyword = ''
    }
  }
  delHistory(id:number){
    alert(id)
    this.historyList.splice(id,1)
  }
  doAdd(e){

    if(e.keyCode == 13){

      if(!this.todolistHasKeyword(this.historyList,this.keyword)){
        this.historyList.push({
          title:this.keyword,
          status:false  // 0 表示待办事项 1 表示已完成事项
        })
      }else{
        alert('查询内容已经存在，请重试')
      }
      this.keyword = ''

    }
  }
  // 如果数组里面有keyword，返回true   否则返回false
  todolistHasKeyword(todoList:any,keyword:any){
    // 异步操作***** 有问题
    // todoList.forEach(element => {
    //   if(element.title == keyword){
    //     return true
    //   }
    // });


    for(let i = 0; i<todoList.length;i++){
      if(todoList[i].title == keyword){
        return true
      }
    }
    return false
  }
}
