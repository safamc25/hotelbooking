import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  noDataAvailable: boolean = false;
  hotels:any=[]
  id:any=[]
  rooms:any=[]
  constructor(private hs:HotelService,private ar:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
    this.hotelList();
  }

  hotelList() {
    this.hs.getAllHotel().subscribe({
      next: (result: any) => {
        this.hotels = result;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

 
  

  
  filterHotelsByRating(rating: number) {
    if (rating === 0) {
      // Show all hotels
      this.hotelList();
    } else {
      // Filter hotels based on rating
      this.hs.getAllHotel().subscribe({
        next: (result: any) => {
          this.hotels = result.filter((hotel: any) => hotel.rating === rating);
          this.noDataAvailable = this.hotels.length === 0;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }
  
  viewRooms(id: any) {
    this.router.navigate(['/hotel-rooms', id]);
  }
}
