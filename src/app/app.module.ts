import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { ColorDirective } from './directives/color.directive';
import { DirectivaComponent } from './pages/directiva/directiva.component';
import { NumeroDirective } from './directives/numero.directive';
import { ComponentesComponent } from './pages/componentes/componentes.component';
import { BusquedaProveedoresComponent } from './components/busqueda-proveedores/busqueda-proveedores.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BusquedaClientesComponent } from './components/busqueda-clientes/busqueda-clientes.component';
import { BusquedaCatalogosComponent } from './components/busqueda-catalogos/busqueda-catalogos.component';
import { PaginadorComponent } from './components/common/paginador/paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ColorDirective,
    DirectivaComponent,
    NumeroDirective,
    ComponentesComponent,
    BusquedaProveedoresComponent,
    BusquedaClientesComponent,
    BusquedaCatalogosComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
