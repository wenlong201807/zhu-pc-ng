// 引入核心模块里面的component
import { Component } from '@angular/core';

@Component({
	selector: 'app-root', // 这个组件的名称
	templateUrl: './app.component.html', // html
	styleUrls: [ './app.component.scss' ] // css
})
export class AppComponent {
  title = 'pc-ng'; // 定义属性
  public Parentapp:string="我是根组件定义的数据，床给life-cycle"
  public flag:boolean= true

	constructor() {
		// 构造函数
  }
  changeApp(){
    this.Parentapp= '我是修改之后的app的值'
    console.log(this.Parentapp)
  }
  chengeFlag(){
    this.flag = !this.flag
    if(this.flag){
      console.log('我添加了生命周期这个组件')
    }else{
      console.log('我把周明周期整个组件卸载了')
    }

  }
}
