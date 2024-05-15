import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelroomsComponent } from './hotelrooms.component';

describe('HotelroomsComponent', () => {
  let component: HotelroomsComponent;
  let fixture: ComponentFixture<HotelroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelroomsComponent]
    });
    fixture = TestBed.createComponent(HotelroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
