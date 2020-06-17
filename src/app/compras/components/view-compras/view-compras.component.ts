import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ComprasService } from '../../services/compras.service'
import { Compras } from '../../models/compras.model'

@Component({
  selector: 'app-view-compras',
  templateUrl: './view-compras.component.html',
  styleUrls: ['./view-compras.component.scss']
})
export class ViewComprasComponent implements OnInit {
  comprasSubscription: Subscription;
  id: string;
  compras: Compras;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiCompras: ComprasService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
  }

  deleteRegistro() {
    this._deleteRgistro(this.compras);
  }

  private _getRegistro(id) {
    this.comprasSubscription = this.apiCompras.getCompra$(id).subscribe(
      data => {
        this.compras = data
      },
      err => this.openSnackBar(err)
    )
  }

  private _deleteRgistro(registro) {
    this.comprasSubscription = this.apiCompras.deleteCompras$(registro).subscribe(
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
