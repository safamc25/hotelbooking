import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {

  id:any=[]
  hotelData:any={}
 
 constructor(private hs:HotelService,private ar:ActivatedRoute,private route:Router){}

 images:any="https://i.postimg.cc/vTW7L0fq/hotel-logo-10250-628.avif"

 editClicked:boolean=false

 
 ngOnInit(): void {
  this.ar.params.subscribe((data:any) => {
    this.id = data.id;

    // Call API to get hotel data by id
    this.hs.getHotel(this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        // Assign the retrieved data to hotelData
        this.hotelData = result;
        if(this.hotelData.image){
          this.images=this.hotelData.image
        }
        
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  });
}

editClick(){
  this.editClicked=true
}

updateData() {
  this.hs.UpdateHotel(this.id, this.hotelData).subscribe({
      next: (result: any) => {
          console.log(result);
          this.hotelData = result; // Update local data with response from backend
          this.route.navigateByUrl("/admin/hotelview");
      },
      error: (error: any) => {
          console.error(error);
      }
  });
}

  getHotel() {
    this.hs.getHotel(this.id).subscribe({
      next: (result: any) => {
        console.log(result);
        // Update hotelData with the retrieved data
        this.hotelData = result;
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
      this.hotelData.image=this.images
      // console.log(this.images);
      
    }
}
}


