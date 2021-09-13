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

  contrasenasCoincidencias():boolean{
    if(this.usuario.contrasena === this.contrasena_confirmar){
      return true;
    }else{
      return false;
    }
  }

  keyPress(event){
    if(this.contrasenasCoincidencias()){
      this.mensaje_contrasena = "Contraseñas Coinciden";
      console.info(this.mensaje_contrasena);
    }else{
      this.mensaje_contrasena = "Contraseñas no coinciden";
      console.info(this.mensaje_contrasena);
    }
  }

}
