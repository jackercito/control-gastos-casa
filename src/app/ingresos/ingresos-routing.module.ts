import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/services/auth.guard'

import { CreateIngresosComponent } from './components/create-ingresos/create-ingresos.component';
import { EditIngresosComponent } from './components/edit-ingresos/edit-ingresos.component';
import { ListIngresosComponent } from './components/list-ingresos/list-ingresos.component';
import { ViewIngresosComponent } from './components/view-ingresos/view-ingresos.component';

const routes: Routes = [
  {
    path: 'ingresos/nuevo-registro',
    component: CreateIngresosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'ingresos/listar-registros',
    component: ListIngresosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'ingresos/ver-registros/:id',
    component: ViewIngresosComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Ver Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'ingresos/editar-registros/:id',
    component: EditIngresosComponent,
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

export class IngresosRoutingModule { }
