import { Routes } from '@angular/router';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ConsultaClientesComponent } from './components/consulta-clientes/consulta-clientes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreditosComponent } from './components/creditos/creditos.component';

export const routes: Routes = [
    {path:'crear',component:NuevoClienteComponent,pathMatch:'full'},
    {path:'buscar',component:ConsultaClientesComponent,pathMatch:'full'},
    {path:'contacto',component:ContactoComponent,pathMatch:'full'},
    {path:'creditos',component:CreditosComponent,pathMatch:'full'},
    {path: '', redirectTo:'buscar', pathMatch:'full'},
    {path:'**',component:NotfoundComponent,pathMatch:'full'}
];
