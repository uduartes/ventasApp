import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  usuario:any
  contrasena_confirmar:any
  mensaje_contrasena:string;

  constructor() { }

  ngOnInit(): void {
    this.usuario= {};
    this.mensaje_contrasena = "";

  }


  registrarUsuario(){

  }

  limpiarCampos(){

  }

  passwordDif(): boolean {
    return this.usuario.contrasena != this.contrasena_confirmar ? true : false;
  }

  keyPress(event) {
    if (this.passwordDif()) {
      this.mensaje_contrasena = '';
    } else {
      this.mensaje_contrasena = '*Contraseñas no coinciden';
    }
  }

}
