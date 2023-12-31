import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsuarioservService } from 'src/app/Service/Usuarioserv.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  angForm: FormGroup;
  ShowData: boolean = false;
  constructor(private fb: FormBuilder,private dataService: UsuarioservService,private router:Router) {
  this.angForm = this.fb.group({
  email: [' ', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required],
  name: ['', Validators.required],
  mobile: ['', Validators.required]
  });
  }

  ngOnInit() {

  }

  postdata(angForm1)
  {
  this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['login']);
  },

  error => {
  });
  }


  }
