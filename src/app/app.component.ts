import { Component, OnInit } from '@angular/core';
import { TrmService } from './services/trm.service';
import { RegistroService } from './services/registro.service';
import { SharedMap } from './services/sharedMap.service';
import { Constants } from './utils/constants.util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    trm: String;
    registros: Array<any>;

    constructor(private trmService: TrmService,
        private registroService: RegistroService,
        private sharedMap: SharedMap) { }

    ngOnInit() {
        this.trmService.getTRM().subscribe(data => {
            this.trm = data;
        });

        this.registroService.listar().subscribe(data => {
            this.registros = data;
        });
    }

    registrarIngreso(tipoVehiculo: String) {
        this.sharedMap.set(Constants.MAPA_TIPO_VEHICULO, tipoVehiculo);
        $('#modalRegistroIngreso').modal('show');
    }

    registrarSalida(id: Number) {
        alert('Numero a registrar salida: ' + id);
    }
}
