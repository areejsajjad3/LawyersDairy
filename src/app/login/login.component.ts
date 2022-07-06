import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title: string= 'Login form ';
errorMessage: string="";
username: string="";
  pass: string ="";

  constructor(private router: Router ) { }


  login(){  
    if(this.username == "admin" && this.pass== "areej123" )
    {
      this.router.navigateByUrl('client/create');
    } 
    else
    {
     this.errorMessage="Invalid username or password";
    }

  }
  ngOnInit(): void {
  }

}
