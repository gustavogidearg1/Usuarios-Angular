import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FacturasServiceService } from './facturas-service.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']

})
export class FacturacionComponent implements OnInit {
  factForm: FormGroup;
  ShowData: boolean = false;
  entregas: any;
  clientes: any;


  constructor(
    public FactSer: FacturasServiceService,
    private router:Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {  };
  ngOnInit(): void {
  this.factForm = this.formBuilder.group({
    cliente: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    pago: ['', [Validators.required]],
    entrega: ['', [Validators.required]],
    Producto1: ['', []],
    Cantidad1: ['', []],
    Precio1: ['', []],
    Observacion: ['', []],
    Producto2: ['', []],
    Cantidad2: ['', []],
    Precio2: ['', []],
    Producto3: ['', []],
    Cantidad3: ['', []],
    Precio3: ['', []],
    Producto4: ['', []],
    Cantidad4: ['', []],
    Precio4: ['', []],
    Total1: ['', []],
    Total2: ['', []],
    Total3: ['', []],
    Total4: ['', []],
    TotalGeneral: ['', []],
  });


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

  }
    postdata()
  {
    //alert("nada");
    console.log('content' + JSON.stringify(this.factForm.value));

  this.FactSer.savefact(this.factForm.value)
  .pipe(first())
  .subscribe(
  data => {
    this.factForm.reset();

    if (data['resultado'] == 'OK') {
      alert("Se cargo su factura");
    }
  //this.router.navigate(['login']);
  },

  error => {
  });
  }

}


