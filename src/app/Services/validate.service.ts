import { Injectable } from "@angular/core";
import swal from "sweetalert2";

@Injectable()
export class ValidateService {
  titularAlerta: string = "";
  constructor() {}

  validateRegister(argObjeto) {
    if (
      argObjeto.Email === undefined ||

      argObjeto.password === undefined 
     
    ) {
      console.log("usuario indefenido");
      return false;
    } else {
      return true;
    }
  }

  validateEmail(x) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(x);
  }

  validatePassword(x) {
    const re = /(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9]{5}/;
    const quantity = /[A-Za-z0-9]{5}/;
    const number = /(?=.*[0-9])[A-Za-z0-9]/;
    const mayuscula = /(?=.*[A-Z])[A-Za-z0-9]/;
    if (!quantity.test(x)) {
      swal(
        "La contraseña debe tener al menos 5 caracteres...",
        this.titularAlerta,
        "warning"
      );
    }
    if (!number.test(x)) {
      swal(
        "La contraseña debe tener al menos un numero...",
        this.titularAlerta,
        "warning"
      );
    }

    if (!mayuscula.test(x)) {
      swal(
        "La contraseña debe tener al menos una mayuscula...",
        this.titularAlerta,
        "warning"
      );
    }
    if (!mayuscula.test(x) && !number.test(x)) {
      swal(
        "La contraseña debe tener al menos una mayuscula y un numero...",
        this.titularAlerta,
        "warning"
      );
    }
    if (!mayuscula.test(x) && !quantity.test(x)) {
      swal(
        "La contraseña debe tener al menos una mayuscula y minimo 5 digitos...",
        this.titularAlerta,
        "warning"
      );
    }
    if (!number.test(x) && !quantity.test(x)) {
      swal(
        "La contraseña debe tener al menos un numero y minimo 5 digitos...",
        this.titularAlerta,
        "warning"
      );
    }
    if (!number.test(x) && !quantity.test(x) && !mayuscula.test(x)) {
      swal(
        "La contraseña debe tener al menos un numero, una mayuscula y  minimo 5 digitos...",
        this.titularAlerta,
        "warning"
      );
    }

    return re.test(x);
  }
}
