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
  token: any;

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
    this.appservice.login(this.users.value).subscribe(
     (data: any) => {
     if(data.status == true){
        this.token = data.token;
      localStorage.setItem('token',this.token);
      this.router.navigate(["form"]);
      }
      else
      {
        this.messageservice.add({severity:'info', summary: 'Sticky', detail: 'Verify Username and Password', sticky: true});
      }
    })
  }
}
