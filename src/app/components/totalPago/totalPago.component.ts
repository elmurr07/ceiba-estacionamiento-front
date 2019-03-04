
import { Component } from '@angular/core';
import { Pago } from 'src/app/models/pago.model';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";

@Component({
    selector: 'total-pago',
    templateUrl: './totalPago.component.html',
    styleUrls: ['./totalPago.component.css']
})
export class TotalPagoComponent {
    pago: Pago;
    mostrarPago(pago: Pago) {
        this.pago = pago;
        $('#modalPagoTotal').modal({ backdrop: 'static', keyboard: false });
    }
}
