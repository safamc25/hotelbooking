import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
 
  id:any=[]
  roomData:any={}
  hotels: any[] = [];
 
 constructor(private hs:HotelService,private ar:ActivatedRoute,private route:Router){}

 images:any="https://i.postimg.cc/vTW7L0fq/hotel-logo-10250-628.avif"

 editClicked:boolean=false

 
 ngOnInit(): void {

  this.getHotels()
  this.ar.params.subscribe((data:any) => {
    this.id = data.id;

    // Call API to get hotel data by id
    this.hs.getRoom(this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        // Assign the retrieved data to hotelData
        this.roomData = result;
        if(this.roomData.image){
          this.images=this.roomData.image
          // Assuming each room has a hotelId associated with it
                // You need to make sure hotelId is populated in roomData
                // You might need to adjust this logic based on how your data is structured
                this.roomData.hotelId = result.hotelId;

        }
        
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  });
}
getHotels() {
  this.hs.getAllHotel().subscribe(
    (hotels: any) => {
      this.hotels = hotels;
    },
    (error) => {
      console.error('Error fetching hotels:', error);
    }
  );
}

editClick(){
  this.editClicked=true
}

updateData() {
  // Assuming you have the hotelId available in the roomData object
  if (this.roomData.hotelId && this.roomData.hotelId.length > 0) {
    this.hs.updateRoom(this.id, this.roomData).subscribe({
      next: (result: any) => {
        console.log(result);
        this.route.navigateByUrl("/admin/roomview");
        this.roomData = result; // Update local data with response from backend
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  } else {
    console.error("Hotel ID is missing in roomData");
  }
}

  getRoom() {
    this.hs.getRoom(this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        // Update hotelData with the retrieved data
        this.roomData = result;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


  getFile(event:any){
    let file=event.target.files[0]
  
    // url conversion
    let fr=new FileReader()
  
    // convert
    fr.readAsDataURL(file)
   
  
    // store the converted url (onload)
    fr.onload=(event:any)=>{
      // console.log(event.target.result);
      this.images=event.target.result
      this.roomData.image=this.images
      // console.log(this.images);
      
    }
}
}
