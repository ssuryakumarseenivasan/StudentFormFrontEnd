import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppServiceService } from '../appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ MessageService]
})
export class LoginComponent implements OnInit {

  users:any;

  constructor(private fb: FormBuilder,private appservice:AppServiceService,private messageservice:MessageService, private router:Router) { }


  ngOnInit(): void {

    this.users = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }


  get form() {
    return this.users.controls;
  }



  login(){
    console.log(this.users.value,"vlknffnijk");
    this.appservice.login(this.users.value).subscribe({
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
