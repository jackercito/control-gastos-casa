import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

//Material Designer
import { MaterialDesignerModule } from '../material-designer.module'

import { ComprasRoutingModule } from './compras-routing.module'

import { CreateComprasComponent } from './components/create-compras/create-compras.component';
import { EditComprasComponent } from './components/edit-compras/edit-compras.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { ViewComprasComponent } from './components/view-compras/view-compras.component';

@NgModule({
  declarations: [CreateComprasComponent, EditComprasComponent, ListComprasComponent, ViewComprasComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ComprasRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignerModule
  ]
})
export class ComprasModule { }
