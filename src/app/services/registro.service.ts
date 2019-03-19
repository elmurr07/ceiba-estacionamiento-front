import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro.model';

@Injectable({ providedIn: 'root' })
export class RegistroService {

    constructor(private http: HttpClient) {
    }

    registrarSalida(idRegistro: number): Observable<any> {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('idRegistro', String(idRegistro));
        return this.http.patch('//localhost:8080/registros?' + urlSearchParams.toString(), null);
    }

    listar(): Observable<any> {
        return this.http.get('//localhost:8080/registros');
    }
}