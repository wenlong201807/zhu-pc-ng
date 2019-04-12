// import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // @Output public outer=new EventEmitter()
  public msg:string="我是footer组件中定义的msg属性"
  constructor() { }

  ngOnInit() {
  }

  run(){
    console.log('我是run。。。方法，footer中定义的')
  }

  sendParent(){
    console.log('我是定义在子组件中的方法，想通过@output的方式触发')
    // this.outer.emit('我是child组件中的数据')
  }

}
