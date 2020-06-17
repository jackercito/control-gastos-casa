import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/services/auth.guard'

import { CreateComprasComponent } from './components/create-compras/create-compras.component';
import { EditComprasComponent } from './components/edit-compras/edit-compras.component';
import { ListComprasComponent } from './components/list-compras/list-compras.component';
import { ViewComprasComponent } from './components/view-compras/view-compras.component';

const routes: Routes = [
  {
    path: 'compras/nuevo-registro',
    component: CreateComprasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'compras/listar-registros',
    component: ListComprasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'compras/ver-registros/:id',
    component: ViewComprasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Ver Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'compras/editar-registros/:id',
    component: EditComprasComponent,
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

export class ComprasRoutingModule { }
