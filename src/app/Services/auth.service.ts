import { Injectable, ErrorHandler } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map,tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {User} from '../user';
import {MensajesService} from './mensajes.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: "root"
})
export class AuthService {

  nombreDeUsuario:string;

  compartir(x){
    this.nombreDeUsuario=x;
  }

  // Mande Mensajes desde el servicio mensajesService
  private log (message:string){
    this.mensajesService.add(`Hero Service: ${message}`);
  }
  
  private backenurl = 'localhost:3000/users/register'; 
  private autenticaurl = 'localhost:3000/users/authenticate'; 
  
  authToken: any;
  usuario: any;
  login:number;

  // inyectanco el modulo Http al constructor
  constructor(private http: HttpClient, 
    private mensajesService:MensajesService) {}
   
  // handle error en los metodos HTTP
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // Registrando Usuario al Backen

  registerUser(usuario){

    return this.http.post('https://cleisser-nodejs.herokuapp.com/users/register',usuario,httpOptions).pipe(
      catchError(this.handleError('RegistroUsuario'))

    );    
  }

  autentiqueme(usuario){
    
    return this.http.post('https://cleisser-nodejs.herokuapp.com/users/authenticate',usuario,httpOptions).pipe(
      catchError(this.handleError('autentiqueme'))
    );
  }


  getProfile(usuario) {

    const httpOptions_profile = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get('https://cleisser-nodejs.herokuapp.com/users/profile',httpOptions).pipe(
      catchError(this.handleError('GetProfile'))
    );
    
     }

  loadToken() {
  const token = localStorage.getItem('identificacion_token');
  // token
  this.authToken = token;
    }
          
  storeUserData(token_parametro, usuario){
    
    localStorage.setItem('identificacion_token', token_parametro);
   
    localStorage.setItem('user', JSON.stringify(usuario));
  
    this.authToken = token_parametro;
    this.usuario = usuario;
  }

  

  logout(){
    this.authToken = null;
    this.usuario = null;
    localStorage.clear();
  }

  

  
}
