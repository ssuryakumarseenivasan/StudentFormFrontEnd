import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword1',
  templateUrl: './forgetpassword1.component.html',
  styleUrls: ['./forgetpassword1.component.scss']
})
export class Forgetpassword1Component implements OnInit {

  forget : any;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.forget = this.fb.group({
    });
  }

}
