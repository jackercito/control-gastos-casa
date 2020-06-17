import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ComprasService } from '../../services/compras.service'
import { Compras } from '../../models/compras.model'

@Component({
  selector: 'app-create-compras',
  templateUrl: './create-compras.component.html',
  styleUrls: ['./create-compras.component.scss']
})
export class CreateComprasComponent implements OnInit {
  compraSubscription: Subscription
  registroFormGroup: FormGroup;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private apiCompras: ComprasService
  ) {
    //auth.handleLoginCallback();

    this.registroFormGroup = this.formBuilder.group({
      fecha: [this.currentDate(), Validators.required],
      importe: [0, Validators.required],
      comentario: ['', Validators.required],
      quien: ['', Validators.required],
      igualarACero: [false, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrrar', {
      duration: 5000,
    });
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  savedRegistro() {
    var registro = new Compras();
    registro.fecha = this.registroFormGroup.controls.fecha.value;
    registro.importe = this.registroFormGroup.controls.importe.value;
    registro.comentario = this.registroFormGroup.controls.comentario.value;
    registro.quien = this.registroFormGroup.controls.quien.value;

    if (this.registroFormGroup.controls.quien.value == 'Comun')
      registro.igualarACero = false;
    else
      registro.igualarACero = this.registroFormGroup.controls.igualarACero.value;

    this._guardarRegistro(registro)
  }

  private _guardarRegistro(registro: Compras) {
    this.compraSubscription = this.apiCompras.setCompras$(registro).subscribe(
      data => {
        this.openSnackBar("Registro guardado con exito")
        this.router.navigate([`/recibos/ver-registros/${data['_id']}`])
      },
      err => {
        console.log(err);
        this.openSnackBar("Error al guardar el registro: " + err)
      }
    );
  }

}
