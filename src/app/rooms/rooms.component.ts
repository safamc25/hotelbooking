import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: any = [];
  filteredRooms: any[] = [];
  priceFilter: any = { min: 0, max: 10000 };
  selectedRoomType: any = '';
  numberOfGuests: any = 1;

  constructor(private hs: HotelService) { }

  ngOnInit(): void {
    
    this.roomList();
    
  }

  roomList() {
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result;
        this.filteredRooms = [...this.rooms];
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  applyFilters() {
    this.filteredRooms = this.rooms.filter((room: any) => {
      // Filter by price
      const price = room.price;
      if (price < this.priceFilter.min || price > this.priceFilter.max) {
        return false;
      }
  
      // Filter by room type
      if (this.selectedRoomType && room.roomtype !== this.selectedRoomType) {
        return false;
      }
  
      // Filter by number of guests
      if (room.bed < this.numberOfGuests) {
        return false;
      }
  
      return true;
    });
    console.log(this.filteredRooms);
    
  }
  

  resetFilters() {
    this.selectedRoomType = '';
    this.numberOfGuests = 1;
    this.priceFilter = { min: 0, max: 10000 };
    this.applyFilters();
  }

  getSingleRooms() {
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result.filter((item: any) => {
          return item.roomtype == 'singleroom'


        })
        console.log(this.rooms);

      },



      error: (error: any) => {
        console.error(error);
      }
    })
  }

  getDoubleRooms() {
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result.filter((item: any) => {
          return item.roomtype == 'doubleroom'
        })
        console.log(this.rooms);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  getDeluxRooms() {
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result.filter((item: any) => {
          return item.roomtype == 'deluxeroom'


        })
        console.log(this.rooms);

      },



      error: (error: any) => {
        console.error(error);
      }
    })
  }

  value: number = 500;
  highValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };

}
