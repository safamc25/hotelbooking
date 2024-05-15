import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  id:any;
  users:any=[]
  constructor(private hs:HotelService){}

  ngOnInit(): void {
   const currentUserId=localStorage.getItem("currentUserId")
   if(currentUserId){
    this.hs.getProfile(currentUserId).subscribe({
      next:(result:any)=>{
        this.users=result
      }
    })
    
   }
  }

  
  }


