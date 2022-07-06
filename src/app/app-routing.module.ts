import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientGetComponent } from './client-get/client-get.component';
import { RegistrationComponent } from './registration/registration.component';
import { CalenderComponent } from './calender/calender.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,

  },
    
    {
      path:'client/create', 
      component:ClientAddComponent,
    },
    {
       path: 'edit/:id',
       component: ClientEditComponent,
    },
    {
      path:'clients',
     component:ClientGetComponent,
    },
    {
      path:'calender',
     component:CalenderComponent,
    },
    {
      path:'registration',
     component:RegistrationComponent,
    },

    
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
