import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  hotelCount: number = 0;
  roomCount: number = 0;
  bookingCount: number = 0;
  userCount:number=0

  constructor(private hs: HotelService) {}

  ngOnInit(): void {
    this.fetchCounts();
  }

  fetchCounts() {
    this.hs.getHotelCount().subscribe({
      next:(result:any)=>{
      this.hotelCount = result.count;
      console.log(this.hotelCount);
      
      }
    })
    this.hs.getRoomCount().subscribe({
      next:(result:any)=>{
      this.roomCount = result.count;
      }
    });
    this.hs.getBookingCount().subscribe({
      next:(result:any)=>{
      this.bookingCount = result.count;
      }
    });
    this.hs.getUsersCount().subscribe({
      next:(result:any)=>{
      this.userCount = result.count;
      }
    });
  }
  }

 
