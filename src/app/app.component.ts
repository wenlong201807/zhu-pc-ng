// 引入核心模块里面的component
import { Component } from '@angular/core';

@Component({
	selector: 'app-root', // 这个组件的名称
	templateUrl: './app.component.html', // html
	styleUrls: [ './app.component.scss' ] // css
})
export class AppComponent {
	title = 'pc-ng'; // 定义属性

	constructor() {
		// 构造函数
	}
}
