import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/routes/agregar/agregar.component';
import { HomeComponent } from './components/routes/home/home.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { NotfoundComponent } from './components/routes/notfound/notfound.component';
import { PelisComponent } from './components/routes/pelis/pelis.component';
import { RegisterComponent } from './components/routes/register/register.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { VistasComponent } from './components/routes/vistas/vistas.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'Peliculas',
    component: PelisComponent,
  },
  {
    path: 'Series',
    component: SeriesComponent,
  },
  {
    path: 'Ingresar',
    component: IngresarComponent,
  },
  {
    path: 'Vistas/:id/:media',
    component: VistasComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'Agregar',
    component: AgregarComponent
  },
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
