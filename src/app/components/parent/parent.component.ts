import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public titleToChild:string = "首页组件的标题给child组件的"
  public msg:string = "我是父组件parent中定义的msg"
  public titleToNews:string = "首页组件的标题给news组件的"

  @ViewChild('child') child:any;
  constructor() { }

  ngOnInit() {
  }

  parentRun(){
    console.log('我是parent组件中的run方法。。。')
  }
  getChildFn(){
    console.log('我是定义在父组件中的方法，用来获取child组件的方法的,看我的下一行输出内容')
    this.child.setChildFn()
  }
  getChildProps(){
    console.log('我是定义在父组件中的方法，用来获取child组件的属性用的,看我的下一行输出内容')
    console.log(this.child.childMsg)
  }
  parentControlChildFn(e){
    console.log(e)
    console.log('通过@Output的方式在父组件中触发子组件的方法的操作')
  }


}
