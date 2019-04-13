import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class HttpServiceService {
	constructor() {}

	axiosGet(api) {
		return new Promise((resolve) => {
			axios.get(api).then((res) => {
				// console.log(res);
				resolve(res);
			});
		});
	}
}
