import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) {
    console.log('我是路由整体内容',this.route)
    // console.log('获取路由参数',this.route.queryParams.value.name)
   }

  ngOnInit() {
    // get传值  aid=2&name=朱文龙
    this.route.queryParams.subscribe(data => {
      console.log(data)  //  {aid: "2", name: "朱文龙"}
    })

    // 动态路由获取参数  /ProductDetailComponent/6
    this.route.params.subscribe(data => {
      console.log(data)   // {aid: "6"}
    })
  }

}
