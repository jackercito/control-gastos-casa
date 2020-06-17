import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth0Service } from './services/auth0.service';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CallbackComponent],
})
export class SecurityModule {}
