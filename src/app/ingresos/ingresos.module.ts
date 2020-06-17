import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { IngresosRoutingModule } from './ingresos-routing.module'

import { CreateIngresosComponent } from './components/create-ingresos/create-ingresos.component';
import { EditIngresosComponent } from './components/edit-ingresos/edit-ingresos.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';
import { ViewIngresosComponent } from './components/view-ingresos/view-ingresos.component';



@NgModule({
  declarations: [CreateIngresosComponent, EditIngresosComponent, ListIngresosComponent, ViewIngresosComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    IngresosRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IngresosModule { }
