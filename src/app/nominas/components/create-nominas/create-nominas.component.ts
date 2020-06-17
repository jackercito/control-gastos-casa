import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from '../../../security/services/auth0.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NominasService } from './../../services/nominas.service'
import { Nominas } from './../../models/nominas.model'

@Component({
  selector: 'app-create-nominas',
  templateUrl: './create-nominas.component.html',
  styleUrls: ['./create-nominas.component.scss']
})
export class CreateNominasComponent implements OnInit {
  nominasSubscription: Subscription;
  registroFormGroup: FormGroup;

  constructor(
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private apiNominas: NominasService
  ) {
    this.registroFormGroup = this.formBuilder.group({
      fecha: [this.currentDate(), Validators.required],
      sacado: [0, Validators.required],
      ingresado: [0, Validators.required],
      comentario: [''],
      quien: ['', Validators.required],
      mes: ['', Validators.required],
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
    var registro = new Nominas();
    registro.fecha = this.registroFormGroup.controls.fecha.value;
    registro.sacado = this.registroFormGroup.controls.sacado.value;
    registro.ingresado = this.registroFormGroup.controls.ingresado.value;
    registro.quien = this.registroFormGroup.controls.quien.value;
    registro.comentario = this.registroFormGroup.controls.comentario.value;
    registro.mes = this.registroFormGroup.controls.mes.value;

    this._guardarRegistro(registro)
  }

  private _guardarRegistro(registro: Nominas) {
    this.nominasSubscription = this.apiNominas.setNominas$(registro).subscribe(
      data => {
        this.openSnackBar("Registro guardado con exito")
        this.router.navigate([`/nominas/ver-registros/${data['_id']}`])
      },
      err => {
        console.log(err);
        this.openSnackBar("Error al guardar el registro: " + err)
      }
    );
  }

}
