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
      console.log(this.items,"deptdata")
    });
    
    this.getTableData()
    
  }
  getTableData(){
    this.appservice.getStudents().subscribe((data: any) => {
          this.studentsList = data
          console.log(this.studentsList,"studentData")
        });
    }
    deleteStudent(studentid:any){
      this.studeid = studentid;
      console.log(studentid)
      this.appservice.deleteStudent(this.studeid).subscribe({
        next:(data:any)=>{
  
          console.log(data);
          this.appservice.getStudents().subscribe({
            next:(data:any)=>{
              console.log(data);
        this.getTableData()
            },error:(error:any)=>{
              console.log(error);
            }
          })
        },error:(error:any)=>{
          console.log(error);
        }
      })
  }
  updateStudent(studentid:any){
    this.studid = studentid;
    console.log(this.studid)
    this.router.navigate([this.studid],{relativeTo : this.aRoute})
    this.appservice.updateStudents().subscribe({
    
     })
  }
  

}
