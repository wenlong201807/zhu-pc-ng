import { Component, OnInit } from '@angular/core';

import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-map-andfilter',
	templateUrl: './map-andfilter.component.html',
	styleUrls: [ './map-andfilter.component.scss' ]
})
export class MapAndfilterComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	// 使用工具方法对返回过来的数据做进一步的处理
}
