import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['',[Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)],],
      lastname: ['',[Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)],],
      username: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[^\w\s]).{8,}$/),],],
      confirm: ['', [Validators.required]],
      service: 'advance',
    });
  }

  hitButton() {

      console.log(this.registrationForm.value);

      let data = {
        firstName: this.registrationForm.value.firstname,
        lastName: this.registrationForm.value.lastname,
        email: this.registrationForm.value.username,
        password: this.registrationForm.value.password,
        
        service: 'advance',
      };

      this.userService.register(data).subscribe((response: any) => {
        console.log('signing successfully', response);
      });
  }
}
