import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[]
  constructor(private hs:HotelService){}
 
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
  
      this.hs.getAllUsers().subscribe({
        next: (result: any) => {
          this.users = result
          console.log(result);
        
          
    
        },
        error: (result: any) => {
          alert(result.error)
        }
      })
    }

}
