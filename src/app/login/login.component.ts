import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  LoginFormModel = this.fb.group({
  
    email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  
  });



    // Admin credentials
    adminEmail = 'admin@gmail.com';
    adminPassword = 'admin';
  
  constructor(private fb: FormBuilder, private hs: HotelService, private rout: Router,private toast:ToastService) {}

  ngOnInit(): void {}

  login() {
    if(this.LoginFormModel.valid){
      var path=this.LoginFormModel.value
      var loginData={
        email:path.email,
        password:path.password
      
        
      }
      
      // Check if admin is logging in
      if (loginData.email === this.adminEmail && loginData.password === this.adminPassword) {
        // Handle admin login
        this.toast.showSuccess('Admin login successful');
        // Perform any admin-specific actions here
        // this.AdminUserName=localStorage.getItem("userName")

        this.rout.navigateByUrl('admin')
        return;
      }
      this.hs.login(loginData).subscribe({
        next: (result: any) => {
          this.toast.showSuccess(`${result.user.username} login successfully`);
          this.LoginFormModel.reset();

          localStorage.setItem("currentUser", result.user.username);
          localStorage.setItem("currentUserId", result.user._id);
          localStorage.setItem("token", result.token);
         


          this.rout.navigateByUrl('')
          
        },
        error: (result: any) => {
          this.toast.showError(result.error);
        }
      });
    } else {
      this.toast.showWarning('Invalid form');
    }
    
  }

  

 
}
