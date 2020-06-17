import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IngresosService } from '../../services/ingresos.service'
import { Ingresos } from '../../models/ingresos.model'

@Component({
  selector: 'app-view-ingresos',
  templateUrl: './view-ingresos.component.html',
  styleUrls: ['./view-ingresos.component.scss']
})
export class ViewIngresosComponent implements OnInit {
  ingresosSubscription: Subscription;
  id: string;
  ingreso: Ingresos;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiIngresos: IngresosService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
  }

  deleteRegistro() {
    this._deleteRgistro(this.ingreso);
  }

  private _getRegistro(id) {
    this.ingresosSubscription = this.apiIngresos.getIngreso$(id).subscribe(
      data => {
        this.ingreso = data
      },
      err => this.openSnackBar(err)
    )
  }

  private _deleteRgistro(nomina) {
    this.ingresosSubscription = this.apiIngresos.deleteIngresos$(nomina).subscribe(
      data => {
        this.openSnackBar('Registro eliminado con exito')
        this.router.navigate([`/recibos/listar-registros`])
      },
      err => this.openSnackBar(err)
    )
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrrar', {
      duration: 5000,
    });
  }
}
