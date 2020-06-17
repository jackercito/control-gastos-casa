import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IngresosService } from '../../services/ingresos.service'
import { Ingresos } from '../../models/ingresos.model'
@Component({
  selector: 'app-edit-ingresos',
  templateUrl: './edit-ingresos.component.html',
  styleUrls: ['./edit-ingresos.component.scss']
})
export class EditIngresosComponent implements OnInit {
  ingresosSubscription: Subscription
  registroFormGroup: FormGroup;
  id: string;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private apiIngresos: IngresosService
  ) {
    this.registroFormGroup = this.formBuilder.group({
      fecha: [this.currentDate(), Validators.required],
      importe: [0, Validators.required],
      comentario: ['', Validators.required],
      quien: ['', Validators.required],
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
    var registro = new Ingresos();
    registro.fecha = this.registroFormGroup.controls.fecha.value;
    registro.importe = this.registroFormGroup.controls.importe.value;
    registro.comentario = this.registroFormGroup.controls.comentario.value;
    registro.quien = this.registroFormGroup.controls.quien.value;
    registro._id = this.id;

    this._guardarRegistro(registro)
  }

  private _guardarRegistro(registro: Ingresos) {
    this.ingresosSubscription = this.apiIngresos.putIngresos$(registro).subscribe(
      data => {
        this.openSnackBar("Registro guardado con exito")
        this.router.navigate([`/ingresos/ver-registros/${data['_id']}`])
      },
      err => {
        console.log(err);
        this.openSnackBar("Error al guardar el registro: " + err)
      }
    );
  }

  private _getRegistro(id) {
    this.ingresosSubscription = this.apiIngresos.getIngreso$(id).subscribe(
      data => {
        this.registroFormGroup.controls['fecha'].setValue(this.transformarDate(data['fecha']));
        this.registroFormGroup.controls['importe'].setValue(data.importe);
        this.registroFormGroup.controls['comentario'].setValue(data.comentario);
        this.registroFormGroup.controls['quien'].setValue(data.quien);
      },
      err => this.openSnackBar(err)
    )
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
