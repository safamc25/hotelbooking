import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { BookingComponent } from './booking/booking.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [ 
{path:"",component:AdminDashboardComponent},
{path:"hoteladd",component:HotelAddComponent},
{path:"hoteledit/:id",component:HotelEditComponent},
{path:"hotelview",component:HotelViewComponent},
{path:"roomadd",component:RoomAddComponent},
{path:"roomedit/:id",component:RoomEditComponent},
{path:"roomview",component:RoomViewComponent},
{path:"booking",component:BookingComponent},
{path:"users",component:UsersComponent},

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
