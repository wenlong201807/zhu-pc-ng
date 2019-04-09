import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  public header:string = '朱文龙，header组件中的属性'
	constructor() {}

	ngOnInit() {}

	get() {
		console.log('我是header组件中的一个get方法');
	}
}
