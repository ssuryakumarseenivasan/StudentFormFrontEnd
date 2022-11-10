import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Result } from 'express-validator';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpclient: HttpClient) { }

  submitstudentform(data: any) {
    return this.httpclient.post(environment.appUrl + "/Student/insertStudents", data);
  }
  getDept() {
    // return this.httpclient.get(environment.appUrl + "/",data);
    return this.httpclient.get(environment.appUrl + "/Student/getdepartmentModels");
  }

  getStudents() {
    return this.httpclient.get(environment.appUrl + "/Student/Getstudent")
  }
  updateStudents() {
    return this.httpclient.get(environment.appUrl + "/Student/updateStudent");
  }
  deleteStudent(id: any) {
    console.log(id, "gokulkannan");
    return this.httpclient.put(environment.appUrl + "/Student/deleteStudents", { id });
  }
}
