import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit() {
  }


  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log('ventana cerrada');
    });
  }

  openTostr(){

    //this.toastr.success

    this.toastr.success('Internal server error', 'error');
    //this.toastr.op


  }
}
