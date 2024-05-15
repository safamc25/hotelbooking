import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  BaseUrl = 'http://localhost:8000'

  constructor(private http:HttpClient) { }




  // signup
  signup(bodyData: any) {
    return this.http.post(`${this.BaseUrl}/add-new-user`, bodyData)
  }

  
  // login
  login(bodyData: any) {
    return this.http.post(`${this.BaseUrl}/login`, bodyData)
  }
  

  getUserProfile(userId: any) {
    return this.http.get(`${this.BaseUrl}/login/${userId}`);
  }

  addHotel(bodyData: any) {
    return this.http.post(`${this.BaseUrl}/admin/add-hotel`, bodyData)
  }

  getAllHotel() {
    return this.http.get(`${this.BaseUrl}/admin/get-all-hotel`)
  }

  getHotel(hotelId: any) {
    return this.http.get(`${this.BaseUrl}/admin/get-hotel/${hotelId}`)
  }

  UpdateHotel(hotelId:any,bodyData:any){
    return this.http.put(`${this.BaseUrl}/admin/update-hotel/${hotelId}`,bodyData)
  }


  deleteHotel(hotelId: any) {
    return this.http.delete(`${this.BaseUrl}/admin/delete-hotel/${hotelId}`)
  }
  addRooms(bodyData: any) {
    return this.http.post(`${this.BaseUrl}/admin/add-room`, bodyData)
  }

  getAllRoom() {
    return this.http.get(`${this.BaseUrl}/admin/get-all-room`)
  }

  getRoom(roomId: any) {
    return this.http.get(`${this.BaseUrl}/admin/get-room/${roomId}`)
  }

  updateRoom(roomId:any,bodyData:any){
    return this.http.put(`${this.BaseUrl}/admin/update-room/${roomId}`,bodyData)
  }


  deleteRoom(roomId: any) {
    return this.http.delete(`${this.BaseUrl}/admin/delete-room/${roomId}`)
  }

 
    // method to create header
    accessTokenHeader(){
      var headers=new HttpHeaders()
      if(localStorage.getItem("token")){
        const token=localStorage.getItem("token")
        var headers=headers.append('access_token',`Bearer ${token}`)
      }
      return {headers}
    }

    addBooking(bodyData: any) {
      return this.http.post(`${this.BaseUrl}/user/add-booking`, bodyData,this.accessTokenHeader())
    }
  

  getAllBooking() {
    return this.http.get(`${this.BaseUrl}/user/get-all-booking`)
  }

  getBooking(bookId: any) {
    return this.http.get(`${this.BaseUrl}/user/get-booking/${bookId}`,this.accessTokenHeader())
  }

  UpdateBooking(bookId:any,bodyData:any){
    return this.http.put(`${this.BaseUrl}/user/update-booking/${bookId}`,bodyData,this.accessTokenHeader())
  }


  deleteBooking(bookId: any) {
    return this.http.delete(`${this.BaseUrl}/user/delete-booking/${bookId}`,this.accessTokenHeader())
  }

 

  getAllUsers() {
    return this.http.get(`${this.BaseUrl}/users/get-all-users`)
  }

  getHotelCount(){
    return this.http.get(`${this.BaseUrl}/get-hotelcount`)
  }

  getRoomCount(){
    return this.http.get(`${this.BaseUrl}/get-roomcount`)
  }

  getUsersCount(){
    return this.http.get(`${this.BaseUrl}/get-usercount`)
  }

  getBookingCount(){
    return this.http.get(`${this.BaseUrl}/get-bookingcount`)
  }

  getProfile(userId: any) {
    return this.http.get(`${this.BaseUrl}/get-profile/${userId}`)
  }

 getBookingUser(id:any){
  return this.http.get(`${this.BaseUrl}/user/get-all-booking/${id}`)
 }
}
