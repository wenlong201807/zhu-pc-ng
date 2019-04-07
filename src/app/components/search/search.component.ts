import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
public searchValue:string=''
public catchList:Array<any>=[
  {
    title:'默认值',
    checked:false,
    isDel:false
  }
]
  constructor() { }

  ngOnInit() {
  }
  doSearch(){
    console.log(this.searchValue)
    let obj:object={
      title:this.searchValue,
      checked:false,
      isDel:false,
      id:new Date().getTime()
    }
    this.catchList.push(obj)
    console.log(this.catchList)
    this.searchValue = ''
  }
  delValue(id:number){
    console.log(id)

  }

}
