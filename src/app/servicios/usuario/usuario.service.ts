import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  collection_usuario: string = 'usuario';
  collection_rol: string = 'Roles';
  constructor(private asf: AngularFirestore) {}

  acceder(usuario: Usuario) {
    return this.asf.collection(this.collection_usuario, (ref) =>
      ref
        .where('correo', '==', usuario.correo)
        .where('contrasena', '==', usuario.contrasena)
    ).valueChanges();
  }

  listarRoles() {
    return this.asf.collection(this.collection_rol).valueChanges();
  }

  listarUsuarios() {
    return this.asf.collection(this.collection_usuario).valueChanges();
  }

  agregarUsuario(usuario: Usuario) {
    usuario.usuario_id = this.agregaCodigoId(usuario);
    //this.asf.collection(this.collection_usuarios).add(usuario);
    // collection = usuarios/1
    return this.asf
      .doc(this.collection_usuario + '/' + usuario.usuario_id)
      .set(usuario);
  }

  agregaCodigoId(usuario: Usuario) {
    let fecha_actual_ms = new Date().getTime().toString();
    let letra_nombres = usuario.nombres.substr(0, 3);
    return fecha_actual_ms + letra_nombres;
  }
}
