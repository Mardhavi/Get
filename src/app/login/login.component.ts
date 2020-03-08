import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Details } from '../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details : Details;
  


  constructor(
    private loginService: LoginService ) { 
  }

  ngOnInit() {
    this.loginService.getdetails().subscribe(details =>{
      this.details = details;
    });
  }
}

