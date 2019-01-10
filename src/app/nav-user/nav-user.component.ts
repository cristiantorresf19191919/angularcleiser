import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Services/auth.service';
import swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  a:number=0;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

 

  salirSesion(param){
    console.log(this.a);
    this.a =param;
    console.log(this.a);
    
    this.authService.logout();
    
    window.setTimeout(() => {
    
      this.router.navigate(['/Login']); 
      
    }, 30);
    
    return false;
  }

}
