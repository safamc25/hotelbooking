import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';
import { RoomsDetailsMoreComponent } from './rooms/rooms-details-more/rooms-details-more.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { BookingaddComponent } from './bookingadd/bookingadd.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    RoomsDetailsComponent,
    RoomsDetailsMoreComponent,
    HotelsComponent,
    BookedroomsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HotelroomsComponent,
    BookingaddComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
