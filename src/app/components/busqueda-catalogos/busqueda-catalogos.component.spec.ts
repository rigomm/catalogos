import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCatalogosComponent } from './busqueda-catalogos.component';

describe('BusquedaCatalogosComponent', () => {
  let component: BusquedaCatalogosComponent;
  let fixture: ComponentFixture<BusquedaCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaCatalogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
