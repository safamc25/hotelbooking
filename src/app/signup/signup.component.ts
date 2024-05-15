import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupModel=this.fb.group(
   {
     username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
     email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
     phone:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}')]],
     password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
   })
 
 
  
   constructor(private fb:FormBuilder,private hs:HotelService,private rout:Router,private toast:ToastService){}
  
   ngOnInit(): void {
    
   }
   signup(){
     if(this.signupModel.valid){
       var path=this.signupModel.value
       var userData={
         username:path.username,
         email:path.email,
         phone:path.phone,
         password:path.password
       }
       this.hs.signup(userData).subscribe({
         next:(result:any)=>{
        // console.log(result);
      this.toast.showSuccess(`${result.username} registered successfully`)
      
      
       this.signupModel.reset()
       this.rout.navigateByUrl('/login')
       
        
       },
       error: (result: any) => {
       this.toast.showError(result.error);
      // console.log(result);
      
        
       }
     })
 
 
     }
     else{
      this.toast.showWarning("invalid form")
     }
   } 

}
