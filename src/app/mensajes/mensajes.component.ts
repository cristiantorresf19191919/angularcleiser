import { Component, OnInit } from '@angular/core';
import {MensajesService} from '../Services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public mensajesService: MensajesService) { }

  ngOnInit() {
  }

}
