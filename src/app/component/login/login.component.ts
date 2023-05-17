import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  reply() {
    console.log(this.loginForm.value);

    let data = {
      email: this.loginForm.value.Email,
      password: this.loginForm.value.Password,
      service: 'advance',
    };

    this.userService.login(data).subscribe((response: any) => {
      console.log('login successfully', response);
      localStorage.setItem('token', response.id);
      this.route.navigateByUrl('/dashboard');
    });
  }
}
