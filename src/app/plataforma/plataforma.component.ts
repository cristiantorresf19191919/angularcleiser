import { Component, OnInit,EventEmitter } from '@angular/core';
import {AuthService} from '../Services/auth.service';




@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  constructor(public authService:AuthService) { }
  usuario_username:any = this.authService.nombreDeUsuario;
  pan:string; 

  ngOnInit() {
    
    console.log('Variable compartida es => '+this.usuario_username);
    
    localStorage.setItem('usuario', this.usuario_username);
    this.pan = localStorage.getItem('usuario');
    
  }

}
