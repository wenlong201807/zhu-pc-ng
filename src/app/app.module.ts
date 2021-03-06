// 这个文件是angular  根模块，告诉angular如何组装应用

// BrowserModul  ，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// angular 核心模块
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// 引入表单相关的模块，才可以使用双向数据绑定功能
import { FormsModule } from '@angular/forms';

// 引入并且配置服务
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { HttpServiceService } from './services/httpservice.service';

// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FromComponent } from './components/from/from.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { DomsComponent } from './components/doms/doms.component';
import { TransitionComponent } from './components/transition/transition.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FooterComponent } from './components/footer/footer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { RequestComponent } from './components/request/request.component';
import { MapAndfilterComponent } from './components/map-andfilter/map-andfilter.component';
import { HttpComponent } from './components/http/http.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { TemplateComponent } from './components/template/template.component';

// @NgModule 装饰器，@NgModule接收一个元数据对象，告诉angular 如何编译和启动应用
@NgModule({
	declarations: [
		// 配置当前项目运行的组件
		AppComponent,
		NewsComponent,
		HomeComponent,
		HeaderComponent,
		FromComponent,
		SearchComponent,
		TodolistComponent,
		DomsComponent,
		TransitionComponent,
		ParentComponent,
		ChildComponent,
		FooterComponent,
		LifeCycleComponent,
		RequestComponent,
		MapAndfilterComponent,
		HttpComponent,
		ProductComponent,
		ProductDetailComponent,
		TemplateComponent
	],
	imports: [
		// 配置当前模块运行依赖的其他模块
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [ StorageService, RequestService, HttpServiceService ], // 配置项目所需要的服务
	bootstrap: [ AppComponent ] // 指定应用的主视图，（称为根组件） 通过引用根AppModule 来启动应用，这里一般写的是根组件
})
export // 根模块不需要导入任何东西
class AppModule {}
