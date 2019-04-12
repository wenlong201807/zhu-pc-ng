import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.scss' ]
})
export class ChildComponent implements OnInit {


	@Input() titleChild: any;
	@Input() childmsg: any;
	@Input() parentRunFn: any;
  @Input() parentComponent: any;

  public childMsg:string="我是child组件的定义的msg"
	constructor() {}

  ngOnInit() {}

  setChildFn(){
    console.log('我是child组件定义的一个setChildFn方法')
  }

	getParentRunFn() {
		console.log('我在子组件中执行父组件的方法的方法');
		this.parentRunFn();
		console.log(this.parentComponent);
	}
	getParentMsgprops() {
		console.log('我在子组件中执行父组件中的属性的方法');
		console.log(this.childmsg);
	}
	getParentComponent() {
		this.parentComponent.parentRun();
		console.log(this.parentComponent.msg);
  }

}
