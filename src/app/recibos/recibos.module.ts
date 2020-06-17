import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { CreateRecibosComponent } from './components/create-recibos/create-recibos.component';
import { EditRecibosComponent } from './components/edit-recibos/edit-recibos.component';
import { ListRecibosComponent } from './components/list-recibos/list-recibos.component';
import { ViewRecibosComponent } from './components/view-recibos/view-recibos.component';

import { RecibosRoutingModule } from './recibos-routing.module'

@NgModule({
  declarations: [
    CreateRecibosComponent,
    EditRecibosComponent,
    ListRecibosComponent,
    ViewRecibosComponent],
  imports: [
    RecibosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    AgGridModule.withComponents([]),
  ]
})
export class RecibosModule { }
