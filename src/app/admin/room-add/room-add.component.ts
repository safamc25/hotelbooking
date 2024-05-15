import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {
 
  hotels: any[] = [];
  images: any = []
  
 

  roomModel = this.fb.group(
    {
      // hotelId: ['', [Validators.required]],
      hotelname: ['', [Validators.required]],
      roomname: ['', [Validators.required]],
      roomtype: ['', [Validators.required]],
     
      bed: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]


    

    })
   
    
  constructor(private fb: FormBuilder, private hs: HotelService, private route: Router,private toast:ToastService) { }
  ngOnInit(): void {
    this.getHotels();
  }
 
 
  getHotels() {
    this.hs.getAllHotel().subscribe(
      (hotels:any) => {
        this.hotels = hotels;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }

  getFile(event: any) {
    let file = event.target.files[0]

    // url conversion
    let fr = new FileReader()

    // convert
    fr.readAsDataURL(file)

    // store the converted url (onload)
    fr.onload = (event: any) => {
      // console.log(event.target.result);
      this.images = event.target.result
      // console.log(this.images);
    }


  }

  addRoom() {
    if(this.roomModel.valid){
    var path = this.roomModel.value
    var roomData={
      
      hotelname:path.hotelname,
     roomname:path.roomname,
     roomtype:path.roomtype,
     
     bed:path.bed,
     price:path.price,
     image:this.images,
     hotelId: this.getHotelIdByName(path.hotelname) // Add hotel ID here
    }




      this.hs.addRooms(roomData).subscribe({
        next: (result: any) => {
          console.log(result);

          this.toast.showSuccess(`${roomData.roomname} registered successfully`)
          this.roomModel.reset()
          this.route.navigateByUrl("admin")
        },
        error: (result: any) => {
          this.toast.showError(result.error)
        }
      })


    }

    else {
      console.log(this.roomModel.errors);
      this.toast.showWarning('invalid form')
    }


  }


// Function to get hotel ID by name
getHotelIdByName(hotelName: any): any {
  const hotel = this.hotels.find(h => h.name === hotelName);
  return hotel ? hotel.id : null; // Assuming your hotel object has an 'id' field
}
}


