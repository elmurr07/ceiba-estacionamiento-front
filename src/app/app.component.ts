import { Component, OnInit, ViewChild } from '@angular/core';
import { TrmService } from './services/trm.service';
import { RegistroService } from './services/registro.service';
import { RegistrarVehiculoComponent } from './components/registrarVehiculo/registrarVehiculo.component';
import { TotalPagoComponent } from './components/totalPago/totalPago.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    @ViewChild(RegistrarVehiculoComponent) registrarVehiculo: RegistrarVehiculoComponent;
    @ViewChild(TotalPagoComponent) totalPago: TotalPagoComponent;
    trm: string;
    registros: Array<any>;
    numeroMotos: number;
    numeroCarros: number;

    constructor(private trmService: TrmService,
        private registroService: RegistroService) { }

    ngOnInit() {
        this.cargarTrmHoy();
        this.listarVehiculos();
    }

    cargarTrmHoy() {
        this.trmService.getTRM().subscribe(data => {
            this.trm = data;
        });
    }

    listarVehiculos() {
        this.registroService.listar().subscribe(data => {
            this.registros = data;
            this.contarVehiculos(data);
        });
    }

    contarVehiculos(vehiculos: Array<any>) {
        this.numeroCarros = 0;
        this.numeroMotos = 0;
        vehiculos.forEach((element) => {
            if (element.vehiculo.tipo == 'CARRO') {
                this.numeroCarros++;
            } else {
                this.numeroMotos++;
            }
        });
    }

    registrarIngreso(tipoVehiculo: string) {
        this.registrarVehiculo.openModal(tipoVehiculo);
    }

    registrarSalida(id: number) {
        this.registroService.registrarSalida(id).subscribe(data => {
            this.totalPago.mostrarPago(data);
            this.listarVehiculos();
        });
    }
}
