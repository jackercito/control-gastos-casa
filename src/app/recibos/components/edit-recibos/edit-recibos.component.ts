import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Recibos } from '../../models/recibos.model'
import { RecibosService } from '../../services/recibos.service'

@Component({
  selector: 'app-edit-recibos',
  templateUrl: './edit-recibos.component.html',
  styleUrls: ['./edit-recibos.component.scss']
})
export class EditRecibosComponent implements OnInit {
  recibosSubscription: Subscription;
  registroFormGroup: FormGroup;
  id: string;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private apiRecibos: RecibosService
  ) {
    this.registroFormGroup = this.formBuilder.group({
      fecha: [this.currentDate(), Validators.required],
      meses: [[]],
      tipo: ['', Validators.required],
      importe: [0, Validators.required],
      consumo: [0],
      unidad: [''],
      nota: [''],
      periodo: [''],
      ant_post: [''],
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
    var registro = new Recibos();
    registro.fecha = this.registroFormGroup.controls.fecha.value;
    registro.tipo = this.registroFormGroup.controls.tipo.value;
    registro.importe = this.registroFormGroup.controls.importe.value;
    registro.consumo = this.registroFormGroup.controls.consumo.value;
    registro.unidad = this.registroFormGroup.controls.unidad.value;
    registro.nota = this.registroFormGroup.controls.nota.value;
    registro.periodo = this.registroFormGroup.controls.periodo.value;
    registro.ant_post = this.registroFormGroup.controls.ant_post.value;
    registro.meses = this.registroFormGroup.controls.meses.value;

    registro._id = this.id;

    this._guardarRegistro(registro)
  }

  transformarDate(fecha) {
    try {
      const currentDate = new Date(fecha);
      return currentDate.toISOString().substring(0, 10);
    } catch (err) {
      return this.currentDate();
    }
  }

  private _getRegistro(id) {
    this.recibosSubscription = this.apiRecibos.getRecibo$(id).subscribe(
      data => {
        this.registroFormGroup.controls['fecha'].setValue(this.transformarDate(data['fecha']));
        this.registroFormGroup.controls['tipo'].setValue(data.tipo);
        this.registroFormGroup.controls['importe'].setValue(data.importe);
        this.registroFormGroup.controls['consumo'].setValue(data.consumo);
        this.registroFormGroup.controls['unidad'].setValue(data.unidad);
        this.registroFormGroup.controls['nota'].setValue(data.nota);
        this.registroFormGroup.controls['periodo'].setValue(data.periodo);
        this.registroFormGroup.controls['ant_post'].setValue(data.ant_post);
        this.registroFormGroup.controls['meses'].setValue(data.meses);
      },
      err => this.openSnackBar(err)
    )
  }

  private _guardarRegistro(registro: Recibos) {
    this.recibosSubscription = this.apiRecibos.putRecibos$(registro).subscribe(
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
