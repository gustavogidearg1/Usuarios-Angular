import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './PagesPublic/login/login.component';
import { HomeComponent } from './PagesPublic/home/home.component';
import { RegisterComponent } from './PagesPublic/register/register.component';
import { DashboardComponent } from './PagesPublic/dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { FacturacionComponent } from './PagesAdmin/facturacion/facturacion.component';
import { ListaFactComponent } from './PagesAdmin/lista-fact/lista-fact.component';
import { UsuarioAdminComponent } from './PagesAdmin/usuario-admin/usuario-admin.component';
import { ClientesComponent } from './PagesAdmin/clientes/clientes.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Clientes', component: ClientesComponent },
  { path: 'ListaFact', component: ListaFactComponent },
  { path: 'Usuario', component: UsuarioAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'facturacion', component: FacturacionComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
