import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecibosService } from '../../services/recibos.service'
import { AgGridButtonViewComponent } from 'src/app/generic-elements/components/ag-grid-button-view/ag-grid-button-view.component';

@Component({
  selector: 'app-list-recibos',
  templateUrl: './list-recibos.component.html',
  styleUrls: ['./list-recibos.component.scss']
})
export class ListRecibosComponent implements OnInit {
  def = {
    filter: "agTextColumnFilter",
    filterParams: {
      caseSensitive: false,
      newRowsAction: 'keep'
    },
    resizable: true,
    sortable: true,
  }

  recibosSubscription: Subscription;
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
    { headerName: 'Tipo Recibo', field: 'tipo', sortable: true, filter: true, ...this.def},
    { headerName: 'Importe', field: 'importe', sortable: true, filter: true, ...this.def},
    { headerName: 'Periodo', field: 'periodo', sortable: true, filter: true, ...this.def},
    { headerName: 'Comentario', field: 'nota', sortable: true, filter: true, ...this.def},
    {
      headerName: "VER",
      filter: false,
      pinned: "right",
      field: "value",
      cellRenderer: 'buttonView',
      colId: '/recibos/ver-registros/',
      width: 120,
      minWidth: 120
    }
  ];

  public frameworkComponents;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiRecibos: RecibosService
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

  private _cargarListaRegistros () {
    this.recibosSubscription = this.apiRecibos.getRecibos$().subscribe(
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
