
import { Component, ViewChild } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo.model';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";
import { AlertComponent } from '../alert/alert.component';

@Component({
    selector: 'registrar-vehiculo',
    templateUrl: './registrarVehiculo.component.html',
    styleUrls: ['./registrarVehiculo.component.css']
})
export class RegistrarVehiculoComponent {
    vehiculo: Vehiculo = new Vehiculo(0, null, null, null);
    @ViewChild(AlertComponent) alertComponent: AlertComponent;

    constructor(private registroService: RegistroService) { }

    registrarIngreso() {
        this.registroService.registrarIngreso(this.vehiculo).subscribe(
            data => {
                $('#modalRegistroIngreso').modal('hide');
                this.alertComponent.showAlert('Vehiculo registrado exitosamente');
            });
    }

    openModal(tipo: string) {
        this.reiniciarVehiculo(tipo);
        $('#modalRegistroIngreso').modal({ backdrop: 'static', keyboard: false });
    }

    reiniciarVehiculo(tipo: string) {
        this.vehiculo = new Vehiculo(0, tipo, null, null);
    }
}
