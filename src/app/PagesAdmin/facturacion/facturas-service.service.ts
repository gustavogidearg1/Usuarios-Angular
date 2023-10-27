import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasServiceService {
  urlEntrega="https://planidear.com.ar/prueba-FullStack/Conexion/mostrarEntregas.php";
  urlCliente="https://planidear.com.ar/prueba-FullStack/Conexion/mostrarCliente.php";
  urlCargaFact1="https://planidear.com.ar/prueba-FullStack/Conexion/facturacion.php";
constructor(private httpClient: HttpClient) { }

public getAllEntrega(): Observable<any>{
  return this.httpClient.get(this.urlEntrega);
}

public getAllCliente(): Observable<any>{
  return this.httpClient.get(this.urlCliente);
}

public savefact(factForm: any): Observable<any>{
  return this.httpClient.post(this.urlCargaFact1,factForm);

 }



}
