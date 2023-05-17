import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {

  constructor() { }

  gettoken(){  
    return !!localStorage.getItem("token");  
    }  

}
