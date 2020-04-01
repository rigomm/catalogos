import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { BusquedaCatalogosComponent } from '../busqueda-catalogos/busqueda-catalogos.component';
import { Paginador } from 'src/app/models/paginador';

@Component({
  selector: 'app-busqueda-clientes',
  templateUrl: './busqueda-clientes.component.html',
  styleUrls: ['./busqueda-clientes.component.css']
})
export class BusquedaClientesComponent implements OnInit {

  @ViewChild('appBusqueda', {static:false}) appCatalogos: BusquedaCatalogosComponent;

  constructor(
    private modalService: NgbModal,
    private clienteService: ClientesService) { }


  lstClientes = new Array<Cliente>();
  paginacion: Paginador = new  Paginador();
  clienteSeleccionado: Cliente = new Cliente();



  ngOnInit() {

    this.cargarCliente();
  }

  cargarCliente(pagina: number = 1) {

    this.clienteService.buscarPaginacion('', pagina).subscribe((data: any) => {

      this.lstClientes = data.result;


      this.paginacion.CalcularPaginas(data.objPaginacion);
    },
      (error) => {

        console.error(error);
    });

  }

  seleccion(obj: Cliente) {
    //
    this.clienteSeleccionado = obj;

    this.appCatalogos.cerrarModal();

  }

  cambioPagina(pagina) {

    this.cargarCliente(pagina);
  }




}
