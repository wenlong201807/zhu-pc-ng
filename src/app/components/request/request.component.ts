import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';
import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: [ './request.component.scss' ]
})
export class RequestComponent implements OnInit {
	constructor(public request:RequestService) {}

	ngOnInit() {
    // 同步方法
    let data:any = this.request.getData()
    console.log(data)




   this.callBackData()
   this.PromiseData()
  //  this.rxjsData()
   this.rxjsDataback()
  //  this.rxjsIntervalData()
  // this.rxjsIntervalNumData()
  }

  // 1、通过回调函数的方式获取异步数据
  callBackData(){
    this.request.getCallbackData((res)=>{
      console.log(res)
    })
  }
   // 2、通过Promise的方式获取异步数据
   PromiseData(){
    this.request.getPromiseData().then(res => {
      console.log(res)
    })
   }

  //  3、rxjs
  rxjsData(){
    this.request.getRxjsData().subscribe(value =>{
      console.log(value)
    })
  }

  //  4、rxjs ---过一秒钟撤回操作
  rxjsDataback(){
    let stream:any = this.request.getRxjsData()

    let d:any = stream.subscribe(value =>{
      console.log(value)
    })

    setTimeout(()=>{
      d.unsubscribe() // 取消订阅
    },1000)
  }

  //  5、rxjs---执行多次
  rxjsIntervalData(){
    this.request.getRxjssetIntervalData().subscribe(value =>{
      console.log(value)
    })
  }

  // 8、使用工具方法对返回过来的数据做进一步的处理
  rxjsIntervalNumData(){
    let streamNum = this.request.getRxjsIntervalNum()

    // 正常输出的方式
    // streamNum.subscribe(value =>{
    //   console.log(value)
    // })

    // 使用管道修改数据，在输出
    streamNum.pipe(
      filter((valueNum) => {
        if(valueNum % 2 == 0){
         return true
        }
      })
    )
    .subscribe(value => {
      console.log(value)
    })
  }
}
