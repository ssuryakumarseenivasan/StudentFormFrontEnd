import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../appservice.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  students : any;
   listStudent:any;
   studentsList:any;
   studid :any;
  items:any = [];
  studeid:any

  constructor(private primengConfig: PrimeNGConfig,private fb: FormBuilder, private confirmationService: ConfirmationService, private router: Router, private messageservice: MessageService,private appservice : AppServiceService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.appservice.getDept().subscribe((data: any) => {
      this.items = data
    });
    
    this.getTableData()
    
  }
  getTableData(){
    this.appservice.getStudents().subscribe((data: any) => {
          this.studentsList = data
        });
    }
    deleteStudent(studentid:any){
      this.studeid = studentid;
      this.appservice.deleteStudent(this.studeid).subscribe({
        next:(data:any)=>{
  
          this.appservice.getStudents().subscribe({
            next:(data:any)=>{
        this.getTableData()
            },error:(error:any)=>{
            }
          })
        },error:(error:any)=>{
        }
      })
  }
  updateStudent(studentid:any){
    this.studid = studentid;
    this.router.navigate([this.studid],{relativeTo : this.aRoute})
    // this.appservice.updateStudents().subscribe({
    
    //  })
  }
  

}
