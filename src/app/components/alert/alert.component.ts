import { Component, OnInit } from '@angular/core';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    mensaje: string;

    constructor() { }

    ngOnInit(): void { }

    showAlert(mensaje: string) {
        this.mensaje = mensaje;
        $('.toast').toast('show');
    };
}
