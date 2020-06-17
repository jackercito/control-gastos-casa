import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Hipotecas } from '../../models/hipotecas.model';
import { HipotecasService } from '../../services/hipotecas.service'

@Component({
  selector: 'app-edit-hipoteca',
  templateUrl: './edit-hipoteca.component.html',
  styleUrls: ['./edit-hipoteca.component.scss']
})
export class EditHipotecaComponent implements OnInit {
  hipotecaSubscription: Subscription;
  registroFormGroup: FormGroup;
  id: string;

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
      modo: [''],
      persona: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._getRegistro(this.id);
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
    registro.modo = this.registroFormGroup.controls.modo.value;
    registro.persona = this.registroFormGroup.controls.persona.value;
    registro._id = this.id;

    this._guardarRegistro(registro)
  }

  private _getRegistro(id) {
    this.hipotecaSubscription = this.apiHipotecas.getHipoteca$(id).subscribe(
      data => {
        this.registroFormGroup.controls['fecha'].setValue(this.transformarDate(data['fecha']));
        this.registroFormGroup.controls['tipo'].setValue(data.tipo);
        this.registroFormGroup.controls['amortizacion'].setValue(data.amortizacion);
        this.registroFormGroup.controls['importe_total'].setValue(data.importe);
        this.registroFormGroup.controls['importe_capital'].setValue(data.importe_capital);
        this.registroFormGroup.controls['importe_intereses'].setValue(data.importe_intereses);
        this.registroFormGroup.controls['modo'].setValue(data.modo);
        this.registroFormGroup.controls['persona'].setValue(data.persona);
      },
      err => this.openSnackBar(err)
    )
  }

  private _guardarRegistro(registro: Hipotecas) {
    this.hipotecaSubscription = this.apiHipotecas.putHipotecas$(registro).subscribe(
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

  private transformarDate(fecha) {
    try {
      const currentDate = new Date(fecha);
      return currentDate.toISOString().substring(0, 10);
    } catch (err) {
      return this.currentDate();
    }
  }
}
