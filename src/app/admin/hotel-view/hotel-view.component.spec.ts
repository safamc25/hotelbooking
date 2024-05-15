import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelViewComponent } from './hotel-view.component';

describe('HotelViewComponent', () => {
  let component: HotelViewComponent;
  let fixture: ComponentFixture<HotelViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelViewComponent]
    });
    fixture = TestBed.createComponent(HotelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
