import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../appservice.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public name :string = "tootoo";
  students: any;
  tabledata : any;
  tableid : any;
  tablestudent : any;

  constructor( private appservice: AppServiceService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.appservice.getStudents().subscribe((data: any) => {
      this.students = data;
      this.name = "surya"
      console.log(this.students,"dataaaa");
    });
  }
  
  

}
