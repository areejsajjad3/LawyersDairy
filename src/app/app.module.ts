import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'
import { FormsModule}  from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientService } from './client.service';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientGetComponent } from './client-get/client-get.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { LoginComponent } from './login/login.component';
import { CalenderComponent } from './calender/calender.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './add/add.component';
import { EventComponent } from './event/event.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    
    AppComponent,
    ClientAddComponent,
    ClientGetComponent,
    ClientEditComponent,
    LoginComponent,
    CalenderComponent,
    RegistrationComponent,
    AddComponent,
    EventComponent,
    DateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
