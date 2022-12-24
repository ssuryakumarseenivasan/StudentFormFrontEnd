import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { SidebarModule } from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { ListComponent } from './list/list.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { RegisterComponent } from './register/register.component';
import {PasswordModule} from 'primeng/password';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ActivationComponent } from './activation/activation.component';
import { LoginComponent } from './login/login.component';
import { ActivepageComponent } from './activepage/activepage.component';
import { AppInterceptor } from './app.interceptor';
  
const ngx: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 15,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#0013ff",
  "fgsPosition": "center-center",
  "fgsSize": 150,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(0,0,0,0.38)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}





@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    RegisterComponent,
    ActivationComponent,
    LoginComponent,
    ActivepageComponent,
  ],
  imports: [
    ToggleButtonModule,
    ConfirmPopupModule,
    ProgressBarModule,
    DropdownModule,
    DialogModule,
    ReactiveFormsModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    CalendarModule,
    ToastModule,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    SidebarModule,
    TooltipModule,
    DynamicDialogModule,
    InputNumberModule,
    ConfirmDialogModule,
    MessagesModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderModule.forRoot(ngx),

    ],
  providers: [ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
