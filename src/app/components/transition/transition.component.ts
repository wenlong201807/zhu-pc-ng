import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-transition',
	templateUrl: './transition.component.html',
	styleUrls: [ './transition.component.scss' ]
})
export class TransitionComponent implements OnInit {
  public flag:boolean = false
	constructor() {}

	ngOnInit() {}

	showBox() {
		console.log('显示');
		let aside: any = document.getElementById('aside');
		aside.style.transform = 'translate(0,0)';
		console.log(aside);
	}

	hideBox() {
		console.log('隐藏');
		let aside: any = document.getElementById('aside');
		aside.style.transform = 'translate(100%,0)';
  }

  toggleBox(){
    let aside: any = document.getElementById('aside');
     console.log(this.flag)

    if(this.flag){
      aside.style.transform = 'translate(100%,0)';
      this.flag = false
      console.log('显示666');
    }else{
      aside.style.transform = 'translate(0,0)';
      this.flag = true
      console.log('隐藏666');
    }
  }
}
