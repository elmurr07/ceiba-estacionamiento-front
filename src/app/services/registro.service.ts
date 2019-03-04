import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class RegistroService {

    constructor( private http: HttpClient ) {
    }

    registrarIngreso( vehiculo: any ): Observable<any> {
        return this.http.post( '//localhost:8080/registro/registrarIngreso', vehiculo );
    }

    registrarSalida( idRegistro: any ): Observable<any> {
        return this.http.post( '//localhost:8080/registro/registrarSalida', idRegistro );
    }

    listar(): Observable<any> {
        return this.http.get( '//localhost:8080/registro/listar');
    }
}