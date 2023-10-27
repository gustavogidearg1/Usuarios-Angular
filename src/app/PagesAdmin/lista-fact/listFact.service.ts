import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFactService {
  baseUrl:string = "https://planidear.com.ar/prueba-FullStack/Conexion/";


constructor(private httpClient: HttpClient) { }

mostrarTodos(){
  return this.httpClient.get(`${this.baseUrl}mostrarListFact.php`);

}
eliminar(idFact:number){
  return this.httpClient.get(`${this.baseUrl}eliminarFactura.php?id=${idFact}`);
}

update(ListaFactura: any){
  return this.httpClient.post(`${this.baseUrl}updateFact.php`, JSON.stringify(ListaFactura));
}



}
