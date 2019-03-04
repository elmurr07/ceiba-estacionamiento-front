import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';
import { Registro } from '../models/registro.model';

@Injectable({ providedIn: 'root' })
export class RegistroService {

    constructor(private http: HttpClient) {
    }

    registrarIngreso(vehiculo: Vehiculo): Observable<any> {
        return this.http.post('//localhost:8080/registro/registrarIngreso', vehiculo);
    }

    registrarSalida(idRegistro: number): Observable<any> {
        let registro: Registro = new Registro(idRegistro, null, null, null);
        return this.http.post('//localhost:8080/registro/registrarSalida', registro);
    }

    listar(): Observable<any> {
        return this.http.get('//localhost:8080/registro/listar');
    }
}