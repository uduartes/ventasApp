import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

producto:Producto

  constructor() { 
   this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  inicializarVariables(){
    this.producto = {};

  }

}
