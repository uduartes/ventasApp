import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  usuario: Usuario;
  contrasena_confirmar: any;
  mensaje_contrasena: string;
  roles: Rol[];
  roles_seleccionados: Rol[];
  rol_seleccionado: Rol;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.inicializarVariables();
  }

  ngOnInit(): void {
    this.listarRoles();
  }

  inicializarVariables() {
    this.usuario = {};
    this.mensaje_contrasena = '';
    this.roles = [];
    this.rol_seleccionado = {};
    this.roles_seleccionados = [];
  }

  listarRoles() {
    this.usuarioService.listarRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  registrarUsuario(frmRegistro: NgForm) {
    if (frmRegistro.valid) {
      if (this.roles_seleccionados.length > 0) {
        this.usuario.roles = this.roles_seleccionados;
        this.usuarioService.agregarUsuario(this.usuario).then(() => {
          alert('Usuario Registrado correctamente');
          this.router.navigate(['../login']);
        });
      } else {
        alert('El usuario debe tener un rol seleccionado');
      }
    } else {
      alert('Formulario Invalido!. Revisa los campos');
    }
  }

  limpiarCampos() {}

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

  addRol() {
    if (this.existeRol()) {
      console.log('El rol ya ha sido agregado');
    } else {
      this.roles_seleccionados.push(this.rol_seleccionado);
    }
  }

  removeRol(rolBorrar: Rol) {
    let idx = this.roles_seleccionados.indexOf(rolBorrar);
    this.roles_seleccionados.splice(idx);
  }

  existeRol(): boolean {
    let existe = this.roles_seleccionados.find(
      (rol) => rol.rol_id == this.rol_seleccionado.rol_id
    );
    if (existe) {
      return true;
    } else {
      return false;
    }
  }
}
