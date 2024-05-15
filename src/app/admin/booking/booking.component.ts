import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking:any=[]
  constructor(private hs:HotelService){}
 
  ngOnInit(): void {
    this.getbooking()
  }

  getbooking(){
  
      this.hs.getAllBooking().subscribe({
        next: (result: any) => {
          this.booking = result
          console.log(result);
        
        },
        error: (result: any) => {
          alert(result.error)
        }
      })
    }
  }


