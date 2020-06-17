import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ResumenesService } from '../../services/resumenes.service'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-generar-resumen',
  templateUrl: './generar-resumen.component.html',
  styleUrls: ['./generar-resumen.component.scss']
})
export class GenerarResumenComponent implements OnInit {
  resumenSubscription: Subscription

  constructor(
    private apiResumen: ResumenesService,
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrrar', {
      duration: 5000,
    });
  }

  descargar() {
    this._descargarResumen();
  }

  private _descargarResumen() {
    this.resumenSubscription = this.apiResumen.gerResumenes(new Date("2020-04-15"), new Date()).subscribe(
      data => this.downloadFile(data, `listado.xlsx`),
      err => console.log(err)
    )
  }

  private downloadFile(data: any, name: string) {
    var blob = new Blob([data], { type: 'application/xlsx' });
    FileSaver.saveAs(blob, name);
  }
}
