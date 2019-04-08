import { Component, OnInit } from '@angular/core';

// 引入并且配置服务
import { StorageService } from '../../services/storage.service';
// 可以使用，但不推荐这么使用
// let storage = new StorageService()


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
public searchValue:string=''
public catchList:Array<any>=[
  {
    title:'默认值',
    checked:false,
    isDel:false,
    id:66
  }
]
  constructor(public storage:StorageService) {
    // console.log(storage)
    // console.log(storage.get())
    // console.log()
    let ss = this.storage.get()
    console.log(ss)
  }

  ngOnInit() {
  }
  doSearch(){
    console.log(this.searchValue)
    console.log('已经有的数据',this.catchList)
    this.catchList.map(item => {
      console.log('对比这两个值是否相等',item.title,this.searchValue)
      if(item.title ===this.searchValue){
        alert('该缓存信息已经存在，请重新输入')
        return this.searchValue = ''
      }
    })
    let obj:object={
      title:this.searchValue || '朱文龙more',
      checked:false,
      isDel:false,
      id:new Date().getTime()
    }
    this.catchList.push(obj)

    console.log(this.catchList)
    this.searchValue = ''
  }
  delValue(id:number){
    console.log(id)
  }
  delHander(id:number){
    console.log(id)
    // this.catchList.filter(item => item.id != id)
    let delIndex = this.catchList.findIndex(item => item.id === id)
    console.log(delIndex)
    this.catchList.splice(delIndex,1)
  }

}
