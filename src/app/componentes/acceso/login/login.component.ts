import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.inicializarVariables();    
  }

  ngOnInit(): void {}

  login(frmRegistro: NgForm) {
    if (frmRegistro.valid) {
      this.usuarioService.acceder(this.usuario).subscribe((usuarios) => {
        if(usuarios.length > 0){
          
        }
        console.log('Se encontro al usuario',usuarios);
      });
    } else {
      alert('Ingresa los datos');
    }
  }

  inicializarVariables(){
    this.usuario = {};
  }

}
