import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { NavegacionComponent } from "./components/navegacion/navegacion.component";
import { NuevoClienteComponent } from "./components/nuevo-cliente/nuevo-cliente.component";
import { ConsultaClientesComponent } from "./components/consulta-clientes/consulta-clientes.component";
import { PieComponent } from "./components/pie/pie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, NavegacionComponent, NuevoClienteComponent, ConsultaClientesComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SANBLAS_202412_webapp_optica';
}
