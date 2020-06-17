import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/services/auth.guard'

import { CreateHipotecaComponent } from './components/create-hipoteca/create-hipoteca.component';
import { EditHipotecaComponent } from './components/edit-hipoteca/edit-hipoteca.component';
import { ViewHipotecaComponent } from './components/view-hipoteca/view-hipoteca.component';
import { ListHipotecaComponent } from './components/list-hipoteca/list-hipoteca.component';

const routes: Routes = [
  {
    path: 'hipotecas/nuevo-registro',
    component: CreateHipotecaComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Nuevo Registro Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'hipotecas/listar-registros',
    component: ListHipotecaComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Listar Registros Hipoteca',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'hipotecas/ver-registros/:id',
    component: ViewHipotecaComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Ver Registro Recibo',
      expectedScopes: [
        "openid",
      ]
    }
  }, {
    path: 'hipotecas/editar-registros/:id',
    component: EditHipotecaComponent,
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
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class HipotecasRoutingModule { }
