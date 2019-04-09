import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-doms',
	templateUrl: './doms.component.html',
	styleUrls: [ './doms.component.scss' ]
})
export class DomsComponent implements OnInit {
	// 1.获取dom节点
	// 2.获取子组件整个实例
	@ViewChild('myBox') myBox: any;
	@ViewChild('header') header: any;
	constructor() {}

	ngOnInit() {
		let oBox: any = document.getElementById('box');
		oBox.style.color = 'red';
		// 节点元素中使用了指令，此钩子函数是在节点加载到页面之前执行的，无法获取到
		// let oBox1 = document.getElementById('box1');
		// oBox1.style.color = 'blue';
	}

	ngAfterViewInit() {
		let oBox1: any = document.getElementById('box1');
		oBox1.style.color = 'blue';
		// 正确的操作方式
		console.log(this.myBox);
		this.myBox.nativeElement.style.width = '100px';
		this.myBox.nativeElement.style.height = '100px';
		this.myBox.nativeElement.style.background = 'red';
		console.log(this.myBox.nativeElement.innerHTML);
		this.myBox.nativeElement.innerHTML = '我要重新赋值给div';

		//
		console.log(this.header);
		// 现在可以获取header组件中的方法，属性所有的内容
		// 获取方法
		this.header.get();
		// 获取属性值
		console.log(this.header.header);
	}

	getHeader() {
		//实战演练，调用
		console.log(666);
		// 获取方法
		this.header.get();
		// 获取属性值
		console.log(this.header.header);
	}
}
