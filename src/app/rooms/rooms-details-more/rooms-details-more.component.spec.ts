import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsDetailsMoreComponent } from './rooms-details-more.component';

describe('RoomsDetailsMoreComponent', () => {
  let component: RoomsDetailsMoreComponent;
  let fixture: ComponentFixture<RoomsDetailsMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsDetailsMoreComponent]
    });
    fixture = TestBed.createComponent(RoomsDetailsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
