import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta';
import { VentaService } from 'src/app/servicios/venta/venta.service';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css'],
})
export class ListarVentasComponent implements OnInit, AfterViewInit {

  lista_ventas: Venta[];

  constructor(private ventaService: VentaService) {}

  ngOnInit(): void {
    this.inicializarVariables();
  }

  ngAfterViewInit() {
    this.ventaService.listarVentas().subscribe((ventaConsulta) => {
      this.lista_ventas = ventaConsulta;
    });
  }

  inicializarVariables() {
    this.lista_ventas = [];
  }
}
