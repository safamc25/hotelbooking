import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedroomsComponent } from './bookedrooms.component';

describe('BookedroomsComponent', () => {
  let component: BookedroomsComponent;
  let fixture: ComponentFixture<BookedroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedroomsComponent]
    });
    fixture = TestBed.createComponent(BookedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
