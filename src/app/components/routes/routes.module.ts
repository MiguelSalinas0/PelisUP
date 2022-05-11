import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PelisComponent } from './pelis/pelis.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistasComponent } from './vistas/vistas.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AgregarComponent } from './agregar/agregar.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [InicioComponent, PelisComponent, SeriesComponent, IngresarComponent, NotfoundComponent, VistasComponent, HomeComponent, ListComponent, AgregarComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule, ReactiveFormsModule, BrowserModule],
  exports: [InicioComponent, PelisComponent, SeriesComponent, IngresarComponent, NotfoundComponent, VistasComponent, RegisterComponent],
})
export class RoutesModule {}
