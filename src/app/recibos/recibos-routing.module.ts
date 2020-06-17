import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/services/auth.guard'

import { CreateRecibosComponent } from './components/create-recibos/create-recibos.component';
import { EditRecibosComponent } from './components/edit-recibos/edit-recibos.component';
import { ListRecibosComponent } from './components/list-recibos/list-recibos.component';
import { ViewRecibosComponent } from './components/view-recibos/view-recibos.component';

const routes: Routes = [
  {
    path: 'recibos/nuevo-registro',
    component: CreateRecibosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  },{
    path: 'recibos/listar-registros',
    component: ListRecibosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Listar Registros Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'recibos/ver-registros/:id',
    component: ViewRecibosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Ver Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'recibos/editar-registros/:id',
    component: EditRecibosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Editar Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecibosRoutingModule { }
