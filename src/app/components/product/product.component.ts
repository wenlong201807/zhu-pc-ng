import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public list:any[] = []


  constructor(public router:Router) { }

  ngOnInit() {
    for(let i:number=0;i<10;i++){
      this.list.push(`这是第${i+1}条数据`)
    }
  }

  // 普通路由和动态路由均可
  goProductDetail(){
    console.log(666)
    this.router.navigate(['/ProductDetailComponent',666])
  }

  GoHome(){

    this.router.navigate(['/HomeComponent'])
  }
  GetProductDetail(){
    console.log(66)
    // let navigationExtras:NavigationExtras = {
    //   queryParams:{'session_id':123},
    //   fragment:'朱文龙'
    // }
    // this.router.navigate(['/ProductDetailComponent'],navigationExtras)
    let params = {
      queryParams:{'session_id':123},
      fragment:'朱文龙'
    }
    this.router.navigate(['/ProductDetailComponent'],params)
  }


}
