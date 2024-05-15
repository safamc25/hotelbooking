import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingaddComponent } from './bookingadd.component';

describe('BookingaddComponent', () => {
  let component: BookingaddComponent;
  let fixture: ComponentFixture<BookingaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingaddComponent]
    });
    fixture = TestBed.createComponent(BookingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
