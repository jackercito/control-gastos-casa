import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/services/auth.guard'

import { CreateNominasComponent } from './components/create-nominas/create-nominas.component';
import { EditNominasComponent } from './components/edit-nominas/edit-nominas.component';
import { ViewNominasComponent } from './components/view-nominas/view-nominas.component';
import { ListNominasComponent } from './components/list-nominas/list-nominas.component';

const routes: Routes = [
  {
    path: 'nominas/nuevo-registro',
    component: CreateNominasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'nominas/listar-registros',
    component: ListNominasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'nominas/ver-registros/:id',
    component: ViewNominasComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Ver Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'nominas/editar-registros/:id',
    component: EditNominasComponent,
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

export class NominasRoutingModule { }
