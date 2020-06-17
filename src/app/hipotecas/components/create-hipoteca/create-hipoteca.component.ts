import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Hipotecas } from '../../models/hipotecas.model';
import { HipotecasService } from '../../services/hipotecas.service'

@Component({
  selector: 'app-create-hipoteca',
  templateUrl: './create-hipoteca.component.html',
  styleUrls: ['./create-hipoteca.component.scss']
})
export class CreateHipotecaComponent implements OnInit {
  hipotecaSubscription: Subscription;
  registroFormGroup: FormGroup;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private apiHipotecas: HipotecasService
  ) {
    //auth.handleLoginCallback();

    this.registroFormGroup = this.formBuilder.group({
      fecha: [this.currentDate(), Validators.required],
      tipo: ['Mensualidad', Validators.required],
      amortizacion: ['Vencimiento'],
      importe_total: [0, Validators.required],
      importe_capital: [0],
      importe_intereses: [0],
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
    var registro = new Hipotecas();
    registro.fecha = this.registroFormGroup.controls.fecha.value;
    registro.tipo = this.registroFormGroup.controls.tipo.value;
    registro.amortizacion = this.registroFormGroup.controls.amortizacion.value;
    registro.importe = this.registroFormGroup.controls.importe_total.value;
    registro.importe_capital = this.registroFormGroup.controls.importe_capital.value;
    registro.importe_intereses = this.registroFormGroup.controls.importe_intereses.value;

    this._guardarRegistro(registro)
  }

  private _guardarRegistro(registro: Hipotecas) {
    this.hipotecaSubscription = this.apiHipotecas.setHipotecas$(registro).subscribe(
      data => {
        this.openSnackBar("Registro guardado con exito")
        this.router.navigate([`/hipotecas/ver-registros/${data['_id']}`])
      },
      err => {
        console.log(err);
        this.openSnackBar("Error al guardar la linea: " + err)
      }
    );
  }
}
