import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Designer
import { MaterialDesignerModule } from './material-designer.module';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Ag-grid
import { AgGridModule } from 'ag-grid-angular';
import { AgGridButtonViewComponent } from './generic-elements/components/ag-grid-button-view/ag-grid-button-view.component'

//Componentes genericos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { MenuModule } from './menu/menu.module'
import { HipotecasModule } from './hipotecas/hipotecas.module'
import { RecibosModule } from './recibos/recibos.module'
import { NominasModule } from './nominas/nominas.module'
import { ComprasModule } from './compras/compras.module'
import { IngresosModule } from './ingresos/ingresos.module'

@NgModule({
  declarations: [
    AppComponent,
    AgGridButtonViewComponent
  ],
  imports: [
    AgGridModule.withComponents([AgGridButtonViewComponent]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignerModule,
    NgbModule,
    //AuthMenssageComponent,
    MenuModule,
    HipotecasModule,
    RecibosModule,
    NominasModule,
    ComprasModule,
    IngresosModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
