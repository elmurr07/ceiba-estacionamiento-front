
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { SharedMap } from '../../services/sharedMap.service';
import { Constants } from '../../utils/constants.util';

@Component({
    selector: 'registrar-vehiculo',
    templateUrl: './registrarVehiculo.component.html',
    styleUrls: ['./registrarVehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {

    tipoVehiculo: String;

    constructor(private registroService: RegistroService, private sharedMap: SharedMap) { }

    ngOnInit(): void {
        this.tipoVehiculo = this.sharedMap.get(Constants.MAPA_TIPO_VEHICULO);
    }
}
