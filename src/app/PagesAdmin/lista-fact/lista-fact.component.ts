import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioservService } from 'src/app/Service/Usuarioserv.service';
import { UsuariosService } from '../usuario-admin/usuarios.service';
import { ListFactService } from './listFact.service';
import { FacturasServiceService } from '../facturacion/facturas-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-lista-fact',
  templateUrl: './lista-fact.component.html',
  styleUrls: ['./lista-fact.component.scss']
})
export class ListaFactComponent implements OnInit {
  @Input() nombre: string = this.dataService.getToken();
  loginbtn:boolean;
  logoutbtn:boolean;

  factForm: FormGroup;
  ShowData: boolean = false;
  entregas: any;
  clientes: any;

  usuaForm: FormGroup;
  usuarios: any;
  ListEditar: any;
  logeadoform: any;
  logeadoAdminform: boolean;
  usuario: string;
  filterPost = '';
  item = [
  {
    idFact: null,
    Fecha: null,
    Cliente: null,
    Pago: null,
    Entrega: null,
  }
  ];

  constructor(  public FactSer: FacturasServiceService, public fbu: FormBuilder, public UsuaSer: UsuariosService, public ListFactServ: ListFactService, private dataService: UsuarioservService) {

    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    //console.log("conectado");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
    }

    }

    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;


    }
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    }
    ListaFactura: any;

  ngOnInit() {
    this.FactSer.getAllEntrega().subscribe(
      (resp) => {
        this.entregas = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    this.FactSer.getAllCliente().subscribe(
      (resp) => {
        this.clientes = resp;
      },
      (error) => {
        console.error(error);
      }
    );



    this.usuaForm = this.fbu.group({
      idFact: [''],
      Fecha: [''],
      Cliente: [''],
      Pago: [''],
      Entrega: [''],

    });
this.MostrarTodos();

  }

  MostrarTodos() {
    this.ListFactServ.mostrarTodos().subscribe((result:any) => this.ListaFactura = result);
    this.ShowData = false;
  }

    Agregar(): void{
  this.UsuaSer.agregar(this.usuaForm.value).subscribe(resp=>{
this.usuaForm.reset();
this.MostrarTodos();

this.usuarios.push(resp);

    },
    error=>{ console.error(error) },
  )
}

eliminar(idFact:number){
  this.ListFactServ.eliminar(idFact).subscribe(datos =>{
    if(datos['resultado'] == 'OK') {
      alert(datos['mensaje']);
      this.MostrarTodos();
    }
  });  }

  Modificar(){
    //console.log("se presiono modificar");
    this.ListFactServ.update(this.usuaForm.value).subscribe((datos:any) =>{
      this.usuaForm.reset();
      if(datos['resultado'] == 'OKM') {
        alert(datos['mensaje']);
        this.MostrarTodos();
        this.ShowData = true;

      }

    }); }

    Seleccionar(idFact:number) {
      this.UsuaSer.seleccionar(idFact).subscribe((result:any) => this.ListaFactura = result[0]);
    }

    editar(ListaFactura: any){
      this.usuaForm.setValue({
        idFact: ListaFactura.idFact,
        Fecha: ListaFactura.Fecha,
        Pago: ListaFactura.Pago,
        Cliente: ListaFactura.Cliente,
        Entrega: ListaFactura.Entrega,
      })
      this.ShowData = true;
    }


}
