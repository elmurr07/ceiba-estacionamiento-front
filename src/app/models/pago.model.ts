import { Registro } from './registro.model';

export class Pago {
    constructor(
        public id: number,
        public valor: number,
        public registro: Registro
    ) { }
}