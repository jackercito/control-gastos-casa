import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HipotecasService } from '../../services/hipotecas.service'
import { Hipotecas } from '../../models/hipotecas.model'

@Component({
  selector: 'app-view-hipoteca',
  templateUrl: './view-hipoteca.component.html',
  styleUrls: ['./view-hipoteca.component.scss']
})
export class ViewHipotecaComponent implements OnInit {
  hipotecasSubscription: Subscription;
  id: string;
  hipoteca: Hipotecas;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiHipotecas: HipotecasService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
  }

  deleteRegistro() {
    this._deleteRgistro(this.hipoteca);
  }

  private _getRegistro(id) {
    this.hipotecasSubscription = this.apiHipotecas.getHipoteca$(id).subscribe(
      data => {
        this.hipoteca = data
      },
      err => this.openSnackBar(err)
    )
  }

  private _deleteRgistro(nomina) {
    this.hipotecasSubscription = this.apiHipotecas.deleteHipotecas$(nomina).subscribe(
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
