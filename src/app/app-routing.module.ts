import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './generic-elements/interceptor/http-error.interceptor';
import { HttpAuth0TokenInterceptor } from './generic-elements/interceptor/http-auth0-token.interceptor'

//Componentes genericos
import { PageNotFoundComponent } from './generic-elements/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './generic-elements/components/home-page/home-page.component';
import { GenerarResumenComponent } from './resumenes/components/generar-resumen/generar-resumen.component'

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'inicio', component: HomePageComponent },
  { path: 'resumen', component: GenerarResumenComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- true: debugging purposes only
        onSameUrlNavigation: 'reload'
      }
    ),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuth0TokenInterceptor,
      multi: true
    },
  ]
})
export class AppRoutingModule { }
