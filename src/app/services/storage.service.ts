import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	constructor() {}

	set(key: any, value: any) {
		return localStorage.setItem(key, JSON.stringify(value));
	}
	get(key: any) {
		return localStorage.getItem(key);
	}
	remove(key: any) {
		return localStorage.removeItem(key);
	}
}
