import { Component, OnInit } from '@angular/core';

// 在组件中也得引入
import {HttpClient} from '@angular/common/http'
// 使用服务里面的axios获取数据
import { HttpServiceService } from '../../services/httpservice.service';

@Component({
	selector: 'app-http',
	templateUrl: './http.component.html',
	styleUrls: [ './http.component.scss' ]
})
export class HttpComponent implements OnInit {
  public lists:any;
	constructor(public http:HttpClient,public httpService:HttpServiceService) {
    console.log(this.http)
  }

	ngOnInit() {
    this.getDataHand()
  }
	getDataHand() {
    console.log('getData');
    this.http.get('http://localhost:3666/user')
    .subscribe(res => {
      console.log(res)
      this.lists = res
    })
  }
  doLogin(){
    let params = {
      id:new Date().getTime(),
      author:'zhuwenlong666',
      title:'new add post'
    }
    this.http.post('http://localhost:3666/user',params)
    .subscribe(res => {
      console.log(res)
      this.getDataHand()
    })
  }
  delete(id:number){
    alert(id)
    this.http.delete('http://localhost:3666/user/'+id)
    .subscribe(res => {
      console.log(res)
      this.getDataHand()
    })
  }
  getAxiosData(){
    console.log('通过封装第三方库获取数据')
    let api = 'http://localhost:3666/user'
    this.httpService.axiosGet(api).then(res => {
      console.log(res)
    })

  }
}
