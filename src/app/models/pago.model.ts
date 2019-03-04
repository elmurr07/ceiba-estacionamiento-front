export class Pago {
    constructor(
        public id: number,
        public valor: number,
        public placa: string,
        public fechaInicio: Date,
        public fechaFin: Date,
    ) { }
}