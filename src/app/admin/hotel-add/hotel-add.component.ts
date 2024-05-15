import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {

  images: any = []
 

  hotelModel = this.fb.group(
    {
      
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      image: ['', [Validators.required]]


    

    })
   
    
  constructor(private fb: FormBuilder, private hs: HotelService, private route: Router,private toast:ToastService) { }

  ngOnInit(): void {

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

  addHotel() {
    if(this.hotelModel.valid){
    var path = this.hotelModel.value
    var hotelData={
      
     name:path.name,
     address:path.address,
     email:path.email,
     phone:path.phone,
     city: path.city,
     state:path.state,
     rating: path.rating,
     image:this.images
    }




      this.hs.addHotel(hotelData).subscribe({
        next: (result: any) => {
          console.log(result);

          this.toast.showSuccess(`${hotelData.name} registered successfully`)
          this.hotelModel.reset()
          this.route.navigateByUrl("admin")
        },
        error: (result: any) => {
          this.toast.showError(result.error)
        }
      })


    }

    else {
      console.log(this.hotelModel.errors);
      this.toast.showWarning('invalid form')
    }


  }


}
