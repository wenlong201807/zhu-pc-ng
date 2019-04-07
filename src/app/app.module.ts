// 这个文件是angular  根模块，告诉angular如何组装应用

// BrowserModul  ，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// angular 核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

// @NgModule 装饰器，@NgModule接收一个元数据对象，告诉angular 如何编译和启动应用
@NgModule({
	declarations: [
		// 配置当前项目运行的组件
		AppComponent,
		NewsComponent,
		HomeComponent,
		HeaderComponent
	],
	imports: [
		// 配置当前模块运行依赖的其他模块
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [], // 配置项目所需要的服务
	bootstrap: [ AppComponent ] // 指定应用的主视图，（称为根组件） 通过引用根AppModule 来启动应用，这里一般写的是根组件
})
export // 根模块不需要导入任何东西
class AppModule {}
