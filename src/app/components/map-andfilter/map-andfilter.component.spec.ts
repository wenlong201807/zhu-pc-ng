import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndfilterComponent } from './map-andfilter.component';

describe('MapAndfilterComponent', () => {
  let component: MapAndfilterComponent;
  let fixture: ComponentFixture<MapAndfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAndfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAndfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
