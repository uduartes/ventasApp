import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ventasApp';
  activeSession:boolean;
  usuario: Usuario = {};

  constructor() {
 
    this.usuario = JSON.parse(window.localStorage.getItem('VENTAS_APP_USER'));
  }
    
   // this.usuario = JSON.parse(windows.localStorage)
  }

