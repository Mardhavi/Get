import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Details } from '../models/login.interface';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  detail: Details;

  constructor(private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) { 
  
  } 

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pmap =>{
      console.log('pmap ', +pmap.get('id'));
      this.loginService.getDetail(+pmap.get('id')).subscribe(detail =>{
        this.detail = detail;
      });
  });
 
}
}
