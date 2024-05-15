import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  
  rooms:any=[]
  roomName: string = ""
  constructor(private hs:HotelService,private toast:ToastService){}
  
  ngOnInit(): void {
   this.roomList()
  }
  roomList(){
    this.hs.getAllRoom().subscribe({
      next: (result: any) => {
        this.rooms = result
        console.log(result);
      
        
  
      },
      error: (result: any) => {
        alert(result.error)
      }
    })
  }


  removeRoom(id: any) {
    this.hs.deleteRoom(id).subscribe({
      next: (result: any) => {
        
        console.log(result);
        // to refresh
        this.roomList()
      this.toast.showSuccess('room removed')

      },
      error: (result: any) => {
        this.toast.showError(result.error)
      }
    })
  }
}
