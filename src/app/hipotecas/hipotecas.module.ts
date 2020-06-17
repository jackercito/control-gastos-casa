import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { HipotecasRoutingModule } from './hipotecas-routing.module'

//ag-grid
import { AgGridModule } from 'ag-grid-angular';

import { CreateHipotecaComponent } from './components/create-hipoteca/create-hipoteca.component';
import { EditHipotecaComponent } from './components/edit-hipoteca/edit-hipoteca.component';
import { ViewHipotecaComponent } from './components/view-hipoteca/view-hipoteca.component';
import { ListHipotecaComponent } from './components/list-hipoteca/list-hipoteca.component';

@NgModule({
  declarations: [
    CreateHipotecaComponent,
    EditHipotecaComponent,
    ViewHipotecaComponent,
    ListHipotecaComponent],
  imports: [
    HipotecasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    AgGridModule.withComponents([]),
  ]
})
export class HipotecasModule { }
