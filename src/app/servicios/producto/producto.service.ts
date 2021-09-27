import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  coleccion_productos: string = 'productos';

  constructor(private afs: AngularFirestore) {}

  listarProductos() {
    return this.afs.collection(this.coleccion_productos).valueChanges();
  }

  //Metodo que accede al documento por el ID y setea un objeto en ese documento
  agregarProducto(producto: Producto) {
    // {
    //   nombre: 'Flavio',
    //   apellido_paterno: 'Ramirez',
    //   apellido_materno: 'Gonzales',
    //   ....
    // }

    producto.producto_id = this.agregarCodigoId(producto);

    // {
    //   usuario_id: 165475512FRG
    //   nombre: 'Flavio',
    //   apellido_paterno: 'Ramirez',
    //   apellido_materno: 'Gonzales',
    //   ....
    // }

    return this.afs
      .doc(this.coleccion_productos + '/' + producto.producto_id)
      .set(producto);
  }

  //Metodo que accede al documento por el ID y actualiza todo el objeto por el nuevo objeto
  editarProducto(producto: Producto) {
    return this.afs
      .doc(this.coleccion_productos + '/' + producto.producto_id)
      .update(producto);
  }

  //Metodo que elimina el documento con el id proporcionado en la colección
  eliminarProducto(producto_id) {
    return this.afs.doc(this.coleccion_productos + '/' + producto_id).delete();
  }

  agregarCodigoId(producto: Producto) {
    let fecha_actual_ms: string = new Date().getTime().toString();
    let letra_nombre: string = producto.nombre.substring(0, 3);

    return fecha_actual_ms + letra_nombre;
  }
}
