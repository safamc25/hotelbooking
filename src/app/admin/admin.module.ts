import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { BookingComponent } from './booking/booking.component';
import { UsersComponent } from './users/users.component';
import { SearchPipe } from './hotelpipe/search.pipe';


@NgModule({
  declarations: [
    AdminComponent, 
    AdminDashboardComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelViewComponent,
    RoomAddComponent,
    RoomEditComponent,
    RoomViewComponent,
    BookingComponent,
    UsersComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ReactiveFormsModule,
    FormsModule,HttpClientModule
  ]
})
export class AdminModule { }
