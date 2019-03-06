
import { Component, ViewChild, Input } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo.model';
import { AlertComponent } from '../alert/alert.component';
import { Constants } from 'src/app/utils/constants.util';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";

@Component({
    selector: 'registrar-vehiculo',
    templateUrl: './registrarVehiculo.component.html',
    styleUrls: ['./registrarVehiculo.component.css']
})
export class RegistrarVehiculoComponent {
    mensajeError = null;
    vehiculo: Vehiculo = new Vehiculo(0, null, null, null);
    @ViewChild(AlertComponent) alertComponent: AlertComponent;
    @Input() refrescar: Function;

    constructor(private registroService: RegistroService) { }

    registrarIngreso() {
        this.vehiculo.placa = this.vehiculo.placa.toUpperCase();
        this.registroService.registrarIngreso(this.vehiculo).subscribe(
            data => {
                $('#' + Constants.ID_MODAL_REGISTRAR_INGRESO).modal('hide');
                this.alertComponent.showAlert(Constants.MENSAJE_REGISTRO_CON_EXITO);
                this.refrescar();
            },
            error => {
                console.error(error);
                if (error.error.message) {
                    this.mensajeError = error.error.message;
                } else {
                    this.mensajeError = Constants.MENSAJE_ERROR_DESCONOCIDO;
                }
            });
    }

    openModal(tipo: string) {
        this.mensajeError = null;
        this.reiniciarVehiculo(tipo);
        $('#' + Constants.ID_MODAL_REGISTRAR_INGRESO).modal({ backdrop: 'static', keyboard: false });
    }

    reiniciarVehiculo(tipo: string) {
        this.vehiculo = new Vehiculo(0, tipo, null, null);
    }
}
