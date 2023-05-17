import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from './Auth/authguardservice.service';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
 

constructor(private Authguardservice: AuthenticationGuardService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
}  
  
}
