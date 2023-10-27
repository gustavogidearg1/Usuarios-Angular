import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // baseUrl:string = "http://localhost/Angular/prueba-FullStack/src/app/Conexion/";
  baseUrl:string = "https://planidear.com.ar/prueba-FullStack/Conexion/";

constructor(private httpClient: HttpClient) { }
public getAllUsua(): Observable<any>{
  return this.httpClient.get(this.baseUrl);
}

mostrarTodos(){

  return this.httpClient.get(`${this.baseUrl}mostrarUser.php`);

}

agregar(Usuarios: any){
  return this.httpClient.post(`${this.baseUrl}agregarUsuarios.php`, JSON.stringify(Usuarios));

}

  eliminar(id :number){
    return this.httpClient.get(`${this.baseUrl}eliminarUsuarios.php?id=${id}`);
  }

  seleccionar(id :number){
    return this.httpClient.get(`${this.baseUrl}seleccionarUsuarios.php?id=${id}`);
  }

  update(Usuarios: any){
    return this.httpClient.post(`${this.baseUrl}updateUsuarios.php`, JSON.stringify(Usuarios));
  }



}
