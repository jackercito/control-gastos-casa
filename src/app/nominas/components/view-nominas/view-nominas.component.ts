import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NominasService } from './../../services/nominas.service'
import { Nominas } from './../../models/nominas.model'

@Component({
  selector: 'app-view-nominas',
  templateUrl: './view-nominas.component.html',
  styleUrls: ['./view-nominas.component.scss']
})
export class ViewNominasComponent implements OnInit {
  nominasSubscription: Subscription;
  id: string;
  nomina: Nominas;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiNominas: NominasService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
  }

  deleteRegistro() {
    this._deleteRgistro(this.nomina);
  }

  private _getRegistro(id) {
    this.nominasSubscription = this.apiNominas.getNomina$(id).subscribe(
      data => {
        this.nomina = data
      },
      err => this.openSnackBar(err)
    )
  }

  private _deleteRgistro(nomina) {
    this.nominasSubscription = this.apiNominas.deleteNominas$(nomina).subscribe(
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
