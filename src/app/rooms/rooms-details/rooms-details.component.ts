import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {
  totalPrice:any=0
  booking: any[] = [];

  id: string | null = null;
  room: any = null;
  hotels: any = [];

  minCheckInDate: any;
  minCheckOutDate: any;


  bookModel = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    checkIn: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]], // Ensure date format YYYY-MM-DD
    checkOut: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]], // Ensure date format YYYY-MM-DD

  });
 

  constructor(private fb: FormBuilder, private hs: HotelService, private route: Router, private ar: ActivatedRoute,private toast:ToastService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      const roomId = params['id']; // Assuming 'id' is the parameter for room ID
      if (roomId) {
        this.fetchRoomDetails(roomId);
    // Calculate minimum check-in and check-out dates
    this.calculateMinDates();
      }
    });
   
  }

  calculateMinDates(): void {
    const currentDate = new Date();
    this.minCheckInDate = currentDate.toISOString().slice(0, 10); // Set min check-in date as current date
    this.minCheckOutDate = this.minCheckInDate; // Set min check-out date same as min check-in date
  }


  fetchRoomDetails(roomId: string): void {
    this.hs.getRoom(roomId).subscribe({
      next: (result: any) => {
        this.room = result;

      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  hotelList() {
    this.hs.getAllHotel().subscribe({
      next: (result: any) => {
        this.hotels = result
        console.log(result);



      },
      error: (result: any) => {
        alert(result.error)
      }
    })
  }

  calculateTotalPrice() {
    const checkInDate = this.bookModel.get('checkIn')?.value;
    const checkOutDate = this.bookModel.get('checkOut')?.value;

    if (checkInDate && checkOutDate) {
        const numberOfNights = Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 3600 * 24));
        this.totalPrice = numberOfNights * this.room.price;
        this.updateGrandTotal();
        console.log(this.totalPrice);
        
      
    }
}

updateGrandTotal() {
    // Update the grand total by adding the current total price to it
    this.totalPrice = this.booking.reduce((total, booking) => total + booking.totalPrice, 0) + this.totalPrice;
    console.log(this.totalPrice);
    
}


  addBook() {
    if (this.bookModel.valid) {
      const path = this.bookModel.value;
      const currentDate = new Date().toISOString().slice(0, 10);
     
    
  
      const bookData = {
        name: path.name,
        phone: path.phone,
        checkIn: path.checkIn,
        checkOut: path.checkOut,
        hotel: this.room.hotelname, // Assuming the room object has a property called 'hotel'
        room: this.room.roomname, // Assuming the room object has a property called 'name'
        currentDate: currentDate,
        totalPrice:0
      };
  
      this.hs.addBooking(bookData).subscribe({
        next: (result: any) => {
          console.log(result);
          
          
        this.totalPrice=result.totalPrice
        
         
        this.toast.showSuccess("Booking Added")
          this.bookModel.reset();
          this.route.navigateByUrl("/bookedrooms");
        },
        error: (result: any) => {
          alert(result.error);
        }
      });
    } else {
      console.log(this.bookModel.errors);
      alert('Invalid form');
    }
  }
}
