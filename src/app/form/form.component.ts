import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../appservice.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  
  providers: [ConfirmationService, MessageService]
})
export class FormComponent implements OnInit {

  visibleSidebar2:any;

   students : any;
   listStudent:any;
   studentsList:any;
   studid :any;
  items:any = [];
  studeid:any
  constructor(private primengConfig: PrimeNGConfig,private fb: FormBuilder, private confirmationService: ConfirmationService, private router: Router, private messageservice: MessageService,private appservice : AppServiceService, private aRoute : ActivatedRoute) { 
    
  // this.items = [];
  // for (let i = 0; i < 10000; i++) {
  //     this.items.push({});
  // }
}

  ngOnInit(): void {

      this.appservice.getDept().subscribe((data: any) => {
        this.items = data
        console.log(this.items,"deptdata")
      });
      
      this.getTableData()
      
    
   

    this.primengConfig.ripple = true;
    this.students = this.fb.group({
      name : [null, [Validators.required]],
      age: [null, [Validators.required]],
      dept: [null, [Validators.required]],
      phonenumber: [null, [Validators.required]],
      Address: [null, [Validators.required]],
    })

   
    
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

  


  submitform(){
    this.appservice.submitstudentform(this.students.value).subscribe({
      next: (data: any) => {
        console.log("dddddddddddddddddddddddddd successs")
        this.router.navigate(['form'])
    },
    error: () => {
      console.log("errrrrrrrrrr ====   ")
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
