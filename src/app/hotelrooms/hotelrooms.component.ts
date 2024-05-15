import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotelrooms',
  templateUrl: './hotelrooms.component.html',
  styleUrls: ['./hotelrooms.component.css']
})
export class HotelroomsComponent implements OnInit {
  hotelId: any;
  rooms: any = [];

  constructor(private route: ActivatedRoute, private hs: HotelService) { }

  ngOnInit() {
    // Get the hotel ID from the route parameters
    this.route.params.subscribe(params => {
      this.hotelId = params['hotelId'];
      // Call the hotel service to get the rooms for the specified hotel ID
    this.getRoom()
        
    })
  }
  

getRoom() {
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result.filter((room: any) => room.hotel === this.hotelId);
       
        console.log(this.rooms);
      },
      error: (error: any) => {
        alert(error.error);
      }
    });
  }


 
}
 
  


