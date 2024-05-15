import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-bookedrooms',
  templateUrl: './bookedrooms.component.html',
  styleUrls: ['./bookedrooms.component.css']
})
export class BookedroomsComponent implements OnInit {
  
  booking:any=[]
  currentUser: any; // Variable to store current user's ID
    
  constructor(private hs:HotelService, private toast:ToastService, private router: Router){}
    
  ngOnInit(): void {
     this.currentUser = localStorage.getItem("currentUser"); // Retrieve current user's ID
     console.log(this.currentUser);
     
     this.bookingList(); // Fetch booking list for the current user
  }
  
  bookingList(){
      this.hs.getAllBooking().subscribe({ // Modify this to fetch bookings for the current user
        next: (result: any) => {
          this.booking = result.filter((booking: any) => booking.name === this.currentUser);
         
          console.log(this.booking);
        },
        error: (error: any) => {
          alert(error.error);
        }
      });
  }
      
  removeBooking(id: any) {
    this.hs.deleteBooking(id).subscribe({
      next: (result: any) => {
        
        console.log(result);
        // to refresh
        this.bookingList()
      this.toast.showSuccess('booking removed')
      // console.log(this.toast.showSuccess);

      },
      error: (result: any) => {
        alert(result.error)
      }
    })
  }
}
