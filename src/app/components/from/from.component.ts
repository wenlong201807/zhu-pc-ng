import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-from',
	templateUrl: './from.component.html',
	styleUrls: [ './from.component.scss' ]
})
export class FromComponent implements OnInit {
  public peopleInfo:any= {
    username:'',
    sex:'',
    city:'上海',
    cityList: ['北京','深圳','上海'],
    hobby:[
      {title:'吃饭',checked:false},
      {title:'读书',checked:true},
      {title:'睡觉',checked:false},
    ],
    mark:''


  }
  public cityList:Array<any> = ['北京','深圳','上海']
	constructor() {}

	ngOnInit() {}

	doSubmit() {
		console.log(66,this.peopleInfo);
		// let username: any = document.getElementById('username');
		// console.log(username.value);
	}
}
