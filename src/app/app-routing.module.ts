import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { ActivationComponent } from './activation/activation.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ActivepageComponent } from './activepage/activepage.component';
import { YGuard } from './app.guard';
import { Forgetpassword1Component } from './forgetpassword1/forgetpassword1.component';
import { Forgetpassword2Component } from './forgetpassword2/forgetpassword2.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [

  {
    path:"form",
    component:FormComponent,
    canActivate : [YGuard]
  },
  {
    path:"signup",
    component:RegisterComponent,
  },
  {
    path:"forgetpass",
    component:Forgetpassword2Component,
  },
  {
    path:"forgetemail",
    component:Forgetpassword1Component,
  },
  {
    path:"active/:token",
    component:ActivationComponent,
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"forget",
    component:ForgetComponent,
  },
  {
    path:"activatepage",
    component:ActivepageComponent,
  },
  {
    path:"admin",
    component:AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//test
