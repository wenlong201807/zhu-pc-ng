import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './httpservice.service';

describe('HttpServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HttpServiceService = TestBed.get(HttpServiceService);
		expect(service).toBeTruthy();
	});
});
