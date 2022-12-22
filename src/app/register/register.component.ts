import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppServiceService } from '../appservice.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RegisterComponent implements OnInit {

  users: any;


  constructor(private fb: FormBuilder, private appservice: AppServiceService, private cm: ConfirmationService, private router: Router, private messageservice: MessageService) { }

  ngOnInit(): void {

    this.users = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }


  get form() {
    return this.users.controls;
  }




  signup() {
    // console.log(this.users.value, 'dscsdsdcs');
    this.appservice.insertuser(this.users.value).subscribe({
      next: (data: any) => {
        if (data == false) {
          this.messageservice.add({ key: 'bc', severity: 'error', summary: 'Rejected', detail: 'Please Check Email and Password', sticky: true });
          console.log("Error");
          // this.router.navigate(['login'])  ;
        }
        else {
          this.messageservice.add({ key: 'kc', severity: 'success', summary: 'Success', detail: 'Please Check Your Mail' });
          setTimeout(() => {
              this.router.navigate(['form']);
              console.log("success");
          }, 2000);

        }
        // this.messageservice.add({ severity: 'info', summary: 'Confirmed', detail: 'Signup Succesfully' });
      },
      error: (error) => {
        console.log(error, "errrrrrrrrrr");
        this.messageservice.add({ severity: 'info', summary: 'Rejected', detail: 'Verify Username and Password' })
      }
    })
  }


}
