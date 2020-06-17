import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { NominasRoutingModule } from './nominas-routing.module'

import { CreateNominasComponent } from './components/create-nominas/create-nominas.component';
import { EditNominasComponent } from './components/edit-nominas/edit-nominas.component';
import { ViewNominasComponent } from './components/view-nominas/view-nominas.component';
import { ListNominasComponent } from './components/list-nominas/list-nominas.component';

@NgModule({
  declarations: [
    CreateNominasComponent,
    EditNominasComponent,
    ViewNominasComponent,
    ListNominasComponent],
  imports: [
    CommonModule,
    NominasRoutingModule,
    AgGridModule.withComponents([]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NominasModule { }
