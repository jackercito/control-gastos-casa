import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'app-ag-grid-button-view',
  templateUrl: './ag-grid-button-view.component.html',
  styleUrls: ['./ag-grid-button-view.component.scss']
})
export class AgGridButtonViewComponent implements ICellRendererAngularComp {
  public url: any;
  public params: any;

  agInit(params: any): void {
    this.params = params;
    this.url = this.params.colDef.colId + this.params.data._id;
  }

  refresh(): boolean {
    return false;
  }

  saludar() {
    console.log("Hola: " + this.url);
  }
}
