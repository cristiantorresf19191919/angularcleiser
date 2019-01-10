import { Component, OnInit,EventEmitter } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../Services/auth.service';
import swal from 'sweetalert2';

interface mis_datos {
  success:boolean;
  username:string;
  password:string;
  msg:string;
  token:string;
  
  
  user : {
    id : string;
    name: string;
    username: string;
    email : string;
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  f:number=0;
  display:string[]=['C','L','E','I','S','E','R','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  probando:string='';
  contador:number=0;
  usuario:string;
  mamola:string;
  contrasena:string;

  onKey(event: KeyboardEvent) { // with type info
    this.f=9;
    if (this.probando === undefined){
      this.probando = ''
    } else {
    this.probando += this.display[this.contador];
    
    this.contador += 1;
    window.setTimeout(()=>{this.f=0},400);}
    


  }


  constructor(
    private router:Router,
    private authService:AuthService) { }
  ngOnInit() {
  }
  botoLogin () {

    alert(this.probando);
    const user2 = {
      username: this.usuario,
      password: this.contrasena
      
    }
    this.mamola= user2.username;
    console.log('mamola => '+this.mamola);
    this.authService.compartir(this.mamola);
  

  this.authService.autentiqueme(user2).subscribe((data:mis_datos)=>{
    console.log('Recibiendo objeto -> ',data);
    const informe = JSON.stringify(data);
    swal(informe,'probando','success');

    if (data.success){
        console.log('se autenticado con exito');
        
        // guarda localstorage
        
        this.authService.storeUserData(data.token, data.user);
        swal('Ahora a iniciado sesion con exito','Disfrute','success');
        window.setTimeout(()=>{this.router.navigate(['/Platform']);},10);
        

      } else {       
          //console.log('Username => '+data.user.username);
          swal({
            type: 'error',
            title: 'Oops...',
            text: data.msg,
            footer: '<a href>Why do I have this issue?</a>'
          });
          
          this.router.navigate(['/Login']);           
          }
         })
             
     }

     





}
