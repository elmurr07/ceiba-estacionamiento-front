import { Vehiculo } from './vehiculo.model';

export class Registro {
    constructor(
        public id: number,
        public vehiculo: Vehiculo,
        public inicio: Date,
        public fin: Date
    ) { }
}