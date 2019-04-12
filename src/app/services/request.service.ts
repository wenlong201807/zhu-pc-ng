import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
  public data:string="默认值"
	constructor() {}
	// 这个是同步的方法
	getData() {
		console.log('我是request服务里面的方法');
		return '朱文龙的服务器---需要在return中返回才能看见';
  }

  // 1、通过回调函数的方式获取异步数据
  getCallbackData(cb:any){
    setTimeout(()=>{
       this.data = "我是异步定时器Callback---cb()"
      cb(this.data)
    },1000)
  }

   // 2、通过Promise的方式获取异步数据
  getPromiseData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.data = "我是异步定时器Promise---resolve"
        resolve(this.data)
     },3000)
    })
  }
   // 3、通过Rxjs的方式获取异步数据
  getRxjsData(){
    return new Observable(observer =>{
      setTimeout(()=>{
        this.data = "我是异步定时器Observable---observer.next"
        observer.next(this.data)
        // observer.error('我是失败的时候返回的内容')
     },3000)
    })
  }
   // 4、通过Rxjs的方式多次执行，
  getRxjssetIntervalData(){
    return new Observable(observer =>{
      let count = 0
      setInterval(()=>{
        count++
        this.data = "我是setInterval异步定时器Observable---observer.next===多次执行获取数据"
        observer.next(this.data+count)
        // observer.error('我是失败的时候返回的内容')
     },1000)
    })
  }

  // 5、返回的数据可以作预处理
  getRxjsIntervalNum(){
    let count = 0
    return new Observable<any>((oberver) => {
      setInterval(() => {
        count++
        oberver.next(count)
      },1000)
    })
  }
}
