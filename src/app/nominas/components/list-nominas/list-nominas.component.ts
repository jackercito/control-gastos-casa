import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NominasService } from '../../services/nominas.service';
import { AgGridButtonViewComponent } from 'src/app/generic-elements/components/ag-grid-button-view/ag-grid-button-view.component';

@Component({
  selector: 'app-list-nominas',
  templateUrl: './list-nominas.component.html',
  styleUrls: ['./list-nominas.component.scss']
})
export class ListNominasComponent implements OnInit {
  def = {
    filter: "agTextColumnFilter",
    filterParams: {
      caseSensitive: false,
      newRowsAction: 'keep'
    },
    resizable: true,
    sortable: true,
  }

  nominasSubscription: Subscription;
  rowData: any;

  columnDefs = [
    {
      headerName: "Fecha",
      field: "fecha",
      ...this.def,
      filter: "agDateColumnFilter",
      valueFormatter: dateFormat,
      filterParams: {
        comparator: compararFechas
      },
      suppressMenu: true
    },
    { headerName: '', field: 'quien', ...this.def },
    { headerName: 'Importe ingresado', field: 'ingresado', ...this.def },
    { headerName: 'Importe Sacado', field: 'sacado', ...this.def },
    {
      headerName: 'Total',
      field: 'sacado',
      valueGetter: function (params) {
        return params.data.ingresado - params.data.sacado;
      },
      ...this.def
    },
    { headerName: 'Comentario', field: 'comentario', ...this.def },
    {
      headerName: "VER",
      filter: false,
      pinned: "right",
      field: "value",
      cellRenderer: 'buttonView',
      colId: '/nominas/ver-registros/',
      width: 120,
      minWidth: 120
    }
  ];

  public frameworkComponents;

  constructor(
    private auth: Auth0Service,
    private _snackBar: MatSnackBar,
    private apiNominas: NominasService
  ) {
    this.frameworkComponents = {
      buttonView: AgGridButtonViewComponent
    };
  }

  ngOnInit(): void {
    this._cargarListaRegistros();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrrar', {
      duration: 5000,
    });
  }

  private _cargarListaRegistros() {
    this.nominasSubscription = this.apiNominas.getNominas$().subscribe(
      data => this.rowData = data,
      err => {
        console.log(err);
        this.openSnackBar("Error al guardar el registro: " + err)
      }
    );
  }
}

function dateFormat(params) {
  var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(params.value).toLocaleDateString('es-ES', options);
}

function compararFechas(filterLocalDateAtMidnight, cellValue) {
  var dateAsString = cellValue;

  if (dateAsString != null) {
    var dateParts = dateAsString.split("-");
    var cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2].substr(0, 2)));

    if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }
}
