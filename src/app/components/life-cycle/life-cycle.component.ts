// import { Component, OnInit,DoCheck } from '@angular/core';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
// export class LifeCycleComponent implements OnInit,DoCheck {
export class LifeCycleComponent  {
  @Input('app') app:string;
  public msg:string="我是一个生命周期演示"
  public inputMsg:string=""
  public name:string=""
  public oldName:string=""
  public counts:number=0

  constructor() {
    console.log('00、constructor----构造函数执行了---除了使用简单的值，对局部变量进行初始化之外，什么都不应该做')
   }

  ngOnChanges() {
    console.log('01、ngOnChanges执行，---当被绑定的输入属性的值发生变化的调用，（父子组件传值的时候会触发）')
  }
  ngOnInit(){
    console.log('02、ngOnInit  ---执行了，请求数据一般放在这里')
  }
  ngDoCheck(){
    console.log('03、ngDoCheck执行了----检测，并在发生  angular 无法活不愿意自己检测的变化时，做出反应')
    if(this.inputMsg != this.oldName){
      console.log(`你从${this.oldName}改成${this.inputMsg}`)
      this.oldName = this.inputMsg
    }else{
      this.counts = this.counts + 1
      console.log('没有任何改变地调用了'+this.counts+'次')
    }
  }

  ngAfterContentInit(){
    console.log('04、ngAfterContentInit执行了----当把内容投影仅组件之后调用')
  }
  ngAfterContentChecked(){
    console.log('05、ngAfterContentChecked执行了----每次完成被投影组件内容的变更检测之后调用')
  }
  ngAfterViewInit(){
    console.log('06、ngAfterViewInit执行了----初始化视图以及子视图之后调用(dom操作放在这里)')
  }
  ngAfterViewChecked(){
    console.log('07、ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用')
  }
  ngOnDestroy(){
    console.log('08、ngOnDestroy执行了----组件结束了。')
  }

  // 自定义方法
  changeMsg(){
    console.log('changeMsg----我是自定义的函数')
  }

}
