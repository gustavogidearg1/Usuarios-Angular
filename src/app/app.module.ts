import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './PagesPublic/login/login.component';
import { HomeComponent } from './PagesPublic/home/home.component';
import { RegisterComponent } from './PagesPublic/register/register.component';
import { DashboardComponent } from './PagesPublic/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaFactComponent } from './PagesAdmin/lista-fact/lista-fact.component';
import { FacturacionComponent } from './PagesAdmin/facturacion/facturacion.component';
import { FacturasServiceService } from './PagesAdmin/facturacion/facturas-service.service';
import { UsuarioAdminComponent } from './PagesAdmin/usuario-admin/usuario-admin.component';
import { ClientesComponent } from './PagesAdmin/clientes/clientes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    UsuarioAdminComponent,
    FacturacionComponent,
    ListaFactComponent,
    ClientesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,
ReactiveFormsModule,
NgbModule,
NgbPaginationModule,
 NgbAlertModule

  ],
  providers: [FacturasServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
