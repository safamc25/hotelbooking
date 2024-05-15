import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  // AdminUserName:any=""
  UserName:any=""
  login:any=false

  
  currentUserId: any = "";
  
  constructor(private hs:HotelService){}
  ngOnInit(): void {
    // Check if currentUser is set in localStorage
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      this.login = true;
      this.UserName = currentUser;
      // Set currentUserId if available in localStorage
      this.currentUserId = localStorage.getItem("currentUserId") || "";
    } else {
      this.login = false;
    }
  }
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentUserId")
  localStorage.removeItem("token")

  this.login=false


}
}
