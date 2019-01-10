import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  c:number=0;
  competencia(parametro){
    this.c=parametro;
  }

  constructor(
    
    
  ) { }

  ngOnInit() {
  }

}
