import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaProveedoresComponent } from './busqueda-proveedores.component';

describe('BusquedaProveedoresComponent', () => {
  let component: BusquedaProveedoresComponent;
  let fixture: ComponentFixture<BusquedaProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
