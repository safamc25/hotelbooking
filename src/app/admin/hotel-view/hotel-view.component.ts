import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {
  
hotels:any=[]
hotelName: string = ""
  constructor(private hs:HotelService ,private toast:ToastService){}
  
  ngOnInit(): void {
   this.hotelList()
  }
  hotelList(){
    this.hs.getAllHotel().subscribe({
      next: (result: any) => {
        this.hotels = result
        console.log(result);
      
        
  
      },
      error: (result: any) => {
        this.toast.showError(result.error)
      }
    })
  }


  removeHotel(id: any) {
    this.hs.deleteHotel(id).subscribe({
      next: (result: any) => {
        
        console.log(result);
        // to refresh
        this.hotelList()
      this.toast.showSuccess('hotel removed')

      },
      error: (result: any) => {
        this.toast.showError(result.error)
      }
    })
  }
}
