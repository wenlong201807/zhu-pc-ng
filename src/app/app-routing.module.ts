import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
	{ path: 'NewsComponent', component: NewsComponent, children: [] },
	{ path: 'HomeComponent', component: HomeComponent, children: [] },
	{ path: 'HeaderComponent', component: HeaderComponent, children: [] },
	{ path: 'FromComponent', component: FromComponent, children: [] },
	{ path: 'SearchComponent', component: SearchComponent, children: [] },
	{ path: 'TodolistComponent', component: TodolistComponent, children: [] },
	{ path: 'DomsComponent', component: DomsComponent, children: [] },
	{ path: 'TransitionComponent', component: TransitionComponent, children: [] },
	{ path: 'ParentComponent', component: ParentComponent, children: [] },
	{ path: 'ChildComponent', component: ChildComponent, children: [] },
	{ path: 'FooterComponent', component: FooterComponent, children: [] },
	{ path: 'LifeCycleComponent', component: LifeCycleComponent, children: [] },
	{ path: 'RequestComponent', component: RequestComponent, children: [] },
	{ path: 'MapAndfilterComponent', component: MapAndfilterComponent, children: [] },
	{ path: 'HttpComponent', component: HttpComponent, children: [] },
	{ path: 'ProductComponent', component: ProductComponent, children: [] },
	// { path: 'ProductDetailComponent', component: ProductDetailComponent, children: [] },
	{ path: 'ProductDetailComponent/:aid', component: ProductDetailComponent, children: [] },
	{ path: 'TemplateComponent', component: TemplateComponent, children: [] },
	// 匹配不到路由，默认跳转到指定路由页面
	{ path: '**', redirectTo: 'HomeComponent' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
