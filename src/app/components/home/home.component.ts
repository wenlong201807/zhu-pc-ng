import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public imgUrl:string= "assets/imgs/antd_logo.png"
public list:any[]=[
  {title:'我是新闻1'},
  {title:'我是新闻2'},
  {title:'我是新闻3'}
]
public flag:boolean= true
public orderStatus:number=3 // 1 表示已经支付，
public firstBol:boolean = true
public secondBol:boolean = true
public selfdefined:string= 'red'
public tody:any=new Date()
public title:string='我是初试化赋值的title变量内容'
public keywords:string='我是初始值'



  constructor() {
    console.log(this.tody,'asgadf')
  }

  ngOnInit() {
  }
  run(){
    console.log(this.tody,'执行事件')
  }
  getTitle(){
    this.title = '我是初试化赋值的title变量内容'
    console.log(this.title,'获取title的内容执行事件')
  }
  setTitle(){
    this.title = '我是来通过方法修改原来title里面的内容的'
    console.log(this.title,'修改title的内容执行事件')
  }

  runEvent(e){
    let dom:any=e.target
    dom.style.color ='red'
  }
  keydown(e){
    console.log('keydonw',e)
    if(e.keyCode==13){
      console.log('您按下的是回车键')
    }else{
      console.log('你在做什么',e.keyCode,e.target.value)
    }
  }
  keyup(e){
    console.log('keyup',e)
    if(e.keyCode==13){
      console.log('您按下的是回车键')
    }else{
      console.log('你在做什么',e.keyCode,e.target.value)
    }
  }
  chengeInput(e){
console.log('e.target.innerHTML',e.target.innerHTML)
    this.keywords = '666'
  }

}
