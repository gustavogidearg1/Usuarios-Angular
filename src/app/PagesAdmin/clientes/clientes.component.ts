import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesServService } from './Clientes-serv.service';
import { UsuarioservService } from 'src/app/Service/Usuarioserv.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],

})
export class ClientesComponent implements OnInit{

  @Input() nombre: string = this.UsuaSer.getToken();
  loginbtn:boolean;
  logoutbtn:boolean;
  clienteForm: FormGroup;
  itemCliente: any;
  logeadoform: any;
  logeadoAdminform: boolean;
  itemLocalidad: any;
  ShowData: boolean = false;

  constructor(public fbu: FormBuilder, public UsuaSer: UsuarioservService, private dataService: ClientesServService) {

    UsuaSer.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.UsuaSer.isLoggedIn())
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
    this.UsuaSer.deleteToken();
    window.location.href = window.location.href;
    }
    Usuarios = {
      id : null,
      name: null,
      email : null,
      password: null,
      rol: null,
  }


  ngOnInit() {

    this.dataService.getAllLocalidad().subscribe(
      (resp) => {
        this.itemLocalidad = resp;
      },
      (error) => {
        console.error(error);
      }
    );

    this.clienteForm = this.fbu.group({
      idCliente: [''],
      ClienteSIW: ['', Validators.required],
      Domicilio: ['', Validators.required],
      Localidad: ['', Validators.required],
    });
this.MostrarTodos();

  }


  MostrarTodos() {
    this.dataService.mostrarTodos().subscribe((result:any) => this.itemCliente = result);
    this.ShowData = false;
  }

    Agregar(): void{
  this.dataService.agregar(this.clienteForm.value).subscribe(resp=>{
this.clienteForm.reset();
this.MostrarTodos();

this.itemCliente.push(resp);

    },
    error=>{ console.error(error) },
  )
}


eliminar(idCliente:number){
  this.dataService.eliminar(idCliente).subscribe(datos =>{
    if(datos['resultado'] == 'OK') {
      alert(datos['mensaje']);
      this.MostrarTodos();
    }
  });  }

  ModificarCliente(){
    //console.log("se presiono modificar");
    this.dataService.update(this.clienteForm.value).subscribe((datos:any) =>{

      if(datos['resultado'] == 'OKMCliente') {
        alert(datos['mensaje']);
        this.MostrarTodos();
        this.clienteForm.reset();
        this.ShowData = false;
      }

    }); }

    Seleccionar(id:number) {
      this.dataService.seleccionar(id).subscribe((result:any) => this.Usuarios = result[0]);
    }

    editar(clientes){
      this.clienteForm.setValue({
        idCliente: clientes.idCliente,
        ClienteSIW: clientes.ClienteSIW,
        Domicilio: clientes.Domicilio,
        Localidad: clientes.Localidad,

      })
      this.ShowData = true;
    }


}

