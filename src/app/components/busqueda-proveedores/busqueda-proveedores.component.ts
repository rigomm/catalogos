import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-busqueda-proveedores',
  templateUrl: './busqueda-proveedores.component.html',
  styleUrls: ['./busqueda-proveedores.component.css']
})
export class BusquedaProveedoresComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  open(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    });

  }

}
