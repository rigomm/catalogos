import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = environment.urlCatalogos + 'clientes/';
  constructor(private httpClient: HttpClient) { }


  buscarPaginacion(textoBusqueda, pagina: number = 1) {

    const url = `${this.url}BuscarPaginacion?textoBusqueda=${textoBusqueda}&pagina=${pagina}`;
    return this.httpClient.get(url);

  }


  buscar(textoBusqueda, pagina: number = 1) {

    const url = `${this.url}Buscar?textoBusqueda=${textoBusqueda}`;
    return this.httpClient.get(url);

  }


}
