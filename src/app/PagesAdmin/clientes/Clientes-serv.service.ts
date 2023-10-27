import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesServService {

  baseUrl:string = "https://planidear.com.ar/prueba-FullStack/Conexion/";

  constructor(private httpClient: HttpClient) { }
  public getAllUsua(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  mostrarTodos(){

    return this.httpClient.get(`${this.baseUrl}mostrarClientes.php`);

  }

  agregar(itemCliente: any){
    return this.httpClient.post(`${this.baseUrl}agregarClientes.php`, JSON.stringify(itemCliente));

  }

    eliminar(idCliente: number){
      return this.httpClient.get(`${this.baseUrl}eliminarCliente.php?id=${idCliente}`);
    }

    seleccionar(id :number){
      return this.httpClient.get(`${this.baseUrl}seleccionarUsuarios.php?id=${id}`);
    }

    update(itemCliente: any){
      return this.httpClient.post(`${this.baseUrl}updateCliente.php`, JSON.stringify(itemCliente));
    }

    public getAllLocalidad(): Observable<any>{
      //return this.httpClient.get(this.urlEntrega);
      return this.httpClient.get(`${this.baseUrl}mostrarLocalidad.php`);
    }

  }
