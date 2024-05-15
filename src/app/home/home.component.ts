import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels:any=[]
  rooms:any=[]
  constructor(private hs:HotelService){}
  
  ngOnInit(): void {
   this.hotelList()
   this.roomlist()

  }
  hotelList() {
    this.hs.getAllHotel().subscribe({
      next: (result: any) => {
        // Filter hotels with rating 5
        this.hotels = result.filter((hotel: any) => hotel.rating === 5);
        console.log(this.hotels);
      },
      error: (error: any) => {
        alert(error.error);
      }
    });
  }

  roomlist(){
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
       
        this.rooms = result.filter((room: any) => room.roomtype == 'deluxeroom');
        console.log(this.rooms);
      },
      error: (error: any) => {
        alert(error.error);
      }
    });
  }

  isLoggedIn() {
    if (localStorage.getItem("currentUser")) {
      return true
    }
    else {
      return false
    }
  }

 
}
 

