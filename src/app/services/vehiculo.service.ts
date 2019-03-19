import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({ providedIn: 'root' })
export class VehiculoService {

    constructor(private http: HttpClient) {
    }

    registrarIngreso(vehiculo: Vehiculo): Observable<any> {
        return this.http.post('//localhost:8080/vehiculos', vehiculo);
    }
}