import { Component, OnInit, Input} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-busqueda-catalogos',
  templateUrl: './busqueda-catalogos.component.html',
  styleUrls: ['./busqueda-catalogos.component.css']
})
export class BusquedaCatalogosComponent implements OnInit {

  modalRef: NgbModalRef;
  @Input() nombre: string;




  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(modal) {

    this.modalRef = this.modalService.open(modal, { ariaLabelledBy: 'Titulo', size: 'xl' });
  }


  cerrarModal() {

    if (this.modalRef != null) {
      this.modalRef.close();
    }

  }


}
