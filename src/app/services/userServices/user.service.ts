import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }

  

 login(data:any){
   let httpOptions = {
     headers: new HttpHeaders({
       'Content-type': 'application/json',
     })
   }
   return this.httpService.postService("user/login",data,false,httpOptions)
 }

 register(data:any){

this.token = localStorage.getItem('token')
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization : this.token
    })
  }
  return this.httpService.postService("user/userSignUp",data,false,httpOptions);
}



}
