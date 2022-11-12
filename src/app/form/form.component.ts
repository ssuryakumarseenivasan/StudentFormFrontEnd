import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../appservice.service';
import { style } from '@angular/animations';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

  providers: [ConfirmationService, MessageService]
})
export class FormComponent implements OnInit {

  visibleSidebar2: any;

  students: any;
  listStudent: any;
  studentsList: any;
  studid: any;
  items: any = [];
  studeid: any
  partialType = "";
  userId: any;

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder, private confirmationService: ConfirmationService, private router: Router, private messageService: MessageService, private appservice: AppServiceService, private aRoute: ActivatedRoute) {

    // this.items = [];
    // for (let i = 0; i < 10000; i++) {
    //     this.items.push({});
    // }
  }

  ngOnInit(): void {

    this.appservice.getDept().subscribe((data: any) => {
      this.items = data
      console.log(this.items, "deptdata")
    });

    this.getTableData()




    this.primengConfig.ripple = true;
    this.students = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      dept: [null, [Validators.required]],
      phonenumber: [null, [Validators.required]],
      Address: [null, [Validators.required]],
    })



  }

  getTableData() {
    this.appservice.getStudents().subscribe((data: any) => {
      this.studentsList = data
      console.log(this.studentsList, "studentData")
    });
  }



  deleteStudent(studentid: any, event: any) {

    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studeid = studentid;
        console.log(studentid)
        this.appservice.deleteStudent(this.studeid).subscribe({
          next: (data: any) => {
            console.log(data);

            this.appservice.getStudents().subscribe({
              next: (data: any) => {
                console.log(data);
                this.getTableData()
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Student Data Deleted Successfully' });
              }
            })
          }
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }



  visibleSidebar() {
    this.visibleSidebar2 = true;
    this.partialType = "save"
  }


  submitform(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.partialType == 'save') {
          this.appservice.submitstudentform(this.students.value).subscribe({
            next: (data: any) => {
              this.students.reset();
              this.visibleSidebar2 = false;
              this.getTableData()
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Student Created Successfully' });           
            },
            error: () => {
              console.log("errrrrrrrrrr ====   ");
              this.visibleSidebar2 = false;
              this.messageService.add({ severity: 'info', summary: 'Error', detail: 'Resubmit form' });            
            }
          })
        
        }
        else {
          this.students.value['id'] = this.userId;
          console.log(this.students.value, 'formvalue')
          this.appservice.updateStudents(this.students.value).subscribe({
            next: (data: any) => {
              console.log('its coming');
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Successfully Student Data Updated'} );     
              this.visibleSidebar2 = false;
              setTimeout(()=>{      
                this.getTableData();
              }, 7000);
              
              this.students.reset();
            },
            error: () => {
              console.log("errrrrrrrrrr ====   ");
              this.visibleSidebar2 = false;
              this.messageService.add({ severity: 'info', summary: 'Error', detail: 'Resubmit form' });    
            }
          })
        }
      },
      reject: () => {
        this.visibleSidebar2 = false;
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
      }
    })
  }


  updateStudent(student: any, id: any) {
    this.partialType = "edit"
    this.visibleSidebar2 = true
    console.log(student, 'lllllllllllllllllllll');
    this.userId = student.id
    this.students.patchValue({
      name: student.name,
      age: student.age,
      dept: student.dept,
      phonenumber: student.phonenumber,
      Address: student.address,
    })

  } 
}
