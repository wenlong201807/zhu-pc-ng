import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {
@Input() childmsg: any;
@Input() titleToNews: any;
public title = '我是新闻组件中定义的标题';
msg = "我是msg---newcomponent"
username:string = "朱文龙---定义了类型的typescript"
private useNumber:number = 123654
public student:any = "我是student变量，属于任意类型的一种"
public userinfo:object = {
  username:"朱文龙",
  age:20
}
public message:any;
public contentHTML = "<h4>解析html类型的写法看看我是怎么写的</h4>"

// 定义数组
public arr = ['asdf','sfdggv','1234','asgf']
public list:any[] = ['我是新闻数组','wrbwrb','wrbwrtb']
public lists:Array<any> = ['Array<any>','lists','public','Array<number>','Array<string>']
public userlist:any[]=[
  {
    username:'zhu',
    age:6
  },
  {
    username:'zhuwen',
    age:66
  },
  {
    username:'zhuwenlong',
    age:666
  }
]

public cars:any[] = [
  {
    cate:"baoma1",
    list:[
      {title:'宝马x1',age:66},
      {title:'宝马x2',age:62},
      {title:'宝马x3',age:63},
    ]
  },
  {
    cate:"baoma22",
    list:[
      {title:'宝马22x1',age:5566},
      {title:'宝马22x2',age:5562},
      {title:'宝马22x3',age:5563},
    ]
  },
]

/**
 * 声明属性的几种方式
 * 1.public   共有  （默认的方式）  可以在这个类里面使用，也可以在类外面使用
 *
 * 2.protect 保护类  只有在当前类和他的子类里面才可以使用
 *
 * 3.private 私有  只有在当前类才可以访问这个属性
 *  */

	constructor() {
    this.message = "这是在狗崽函数中，改变原始的至的操作"
    console.log(this.msg,'获取值')
    // 设置值
    this.msg = "修改值的内容msg"
  }

	ngOnInit() {}
}
