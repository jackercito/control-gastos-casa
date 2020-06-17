import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Recibos } from '../../models/recibos.model'
import { RecibosService } from '../../services/recibos.service'

@Component({
  selector: 'app-view-recibos',
  templateUrl: './view-recibos.component.html',
  styleUrls: ['./view-recibos.component.scss']
})
export class ViewRecibosComponent implements OnInit {
  recibosSubscription: Subscription;
  id: string;
  recibo: Recibos;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiRecibos: RecibosService
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
  }

  deleteRegistro() {
    this._deleteRgistro(this.id);
  }

  private _getRegistro(id) {
    this.recibosSubscription = this.apiRecibos.getRecibo$(id).subscribe(
      data => {
        this.recibo = data
      },
      err => this.openSnackBar(err)
    )
  }

  private _deleteRgistro(id) {
    this.recibosSubscription = this.apiRecibos.deleteRecibo$(id).subscribe(
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
