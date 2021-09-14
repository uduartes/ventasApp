import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css'],
})
export class AgregarProductosComponent implements OnInit {
  producto: Producto;

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {

  }

  inicializarVariables() {
    this.producto = {};
  }

  registrarProducto(frmRegistro: NgForm){

  }
}
