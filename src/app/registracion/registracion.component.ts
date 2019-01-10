import { Component, OnInit, Directive, Input, ViewChild } from "@angular/core";
import { ValidateService } from "../Services/validate.service";
import { AuthService } from "../Services/auth.service";
import swal from "sweetalert2";
import { Router } from "@angular/router";
import {Ref} from '../reciva';

interface myData {
  success: boolean;
  a:string;
  
}

@Component({
  selector: "app-registracion",
  templateUrl: "./registracion.component.html",
  styleUrls: ["./registracion.component.css"]
})
export class RegistracionComponent implements OnInit {

  resultado;
  mensajillo:string;
  titularAlerta: string;
  final_pswd: string;
  id: number;
  name: string;
  username: string;
  Email: string;
  password: string;
  password_2: string;
  language: string;
  delfinquest: string;
  tenquest: string;

  constructor(
    private servicioValide: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {}

  flashMessages(x) {
    this.id = x;
  }

  ngOnInit() {}
   

  onRegisterSubmit() {
    const usuario = {
      name: this.name,
      username: this.username,
      Email: this.Email,
      password: this.password,
      password_2: this.password_2,
      language: this.language,
      delfinquest: this.delfinquest,
      tenquest: this.tenquest
    };
    console.log(usuario.name);

    if (!this.servicioValide.validateRegister(usuario)) {
      console.log("field in all fields");
      this.id = 2;
      return false;
    }
    const prueba = this.servicioValide.validateEmail(usuario.Email);
    console.log("el email es " + prueba);
    console.log(usuario.password);
    console.log(usuario.Email);
    // Required Fields

    // Validate Email
    if (!this.servicioValide.validateEmail(usuario.Email)) {
      console.log("email is fucking incorrect");
      this.id = 1;
      return false;
    }
    // validate Password
    if (usuario.password !== usuario.password_2) {
      this.id = 4;
      return false;
    }
    // si el usuario ingreso todo correcto entonces
    else {
      this.final_pswd = usuario.password;
      this.servicioValide.validatePassword(this.final_pswd);
      if (this.servicioValide.validatePassword(this.final_pswd)) {
        this.id = 3;
        // Registrando Usuario
    this.authService.registerUser(usuario).subscribe((data:myData)=>{
      
      if (data.success){
        swal(
          "Se Ha registrado Correctamente ",
          ":)",
          "success"
        );

        this.mensajillo=`Su contraseña a sido encriptada en nuestra base de datos   
                  ${data.a}  sus datos estan seguros`;
        
       window.setTimeout(()=>{this.router.navigate(['/Login']);},50);

      
      }

      else {
        swal(
          "No se ha podido registrar",
          this.titularAlerta,
          "warning"
        );
        this.router.navigate(['/Register']);

      }
    }
      );
      }
    }
   
    

    
  }
}
