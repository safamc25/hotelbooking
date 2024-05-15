import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: "", component: HomeComponent},
  {path: "rooms", component: RoomsComponent},
  {path: "roomdetails/:id", component: RoomsDetailsComponent},
  {path: "hotels", component: HotelsComponent},
  {path: "bookedrooms", component: BookedroomsComponent},
  {path:"login",component:LoginComponent },
  {path:"signup",component:SignupComponent},
  { path: 'hotelrooms/:hotelId', component: HotelroomsComponent },
  {path: "profile/:id", component: ProfileComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
