import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { ActivationComponent } from './activation/activation.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ActivepageComponent } from './activepage/activepage.component';
import { YGuard } from './app.guard';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
