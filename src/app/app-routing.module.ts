import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DirectivaComponent } from './pages/directiva/directiva.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';


const routes: Routes = [
  {component: HomeComponent, path: 'home'},
  {component: DirectivaComponent, path: 'directiva'},
  {component: ComponentesComponent, path: 'componentes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
