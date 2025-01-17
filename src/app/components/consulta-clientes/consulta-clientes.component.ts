import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICliente } from '../../interfaces/icliente';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {
  textoBusqueda: string = "";
  listadoClientes: Array<ICliente> = new Array<ICliente>();
  listadoClientesFiltrados: Array<ICliente> = new Array<ICliente>();
  clientesService = inject(ClientesService);
  constructor() {
    this.listadoClientes = this.clientesService.getClientes();
    this.filtrarClientes();
  }
  filtrarClientes() {
    this.listadoClientesFiltrados =
      this.listadoClientes.filter(
        (cliente) =>
          cliente.nombre?.toUpperCase().includes(this.textoBusqueda.trim().toUpperCase()));
    /* 
    //Para buscar por nombre o email en el mismo campo de input
    this.listadoClientesFiltrados = 
     this.listadoClientes.filter((cliente)=>
       buscar(cliente,this.textoBusqueda,this.textoBusqueda));
     */
  }
}

/*
//Para la búsqueda por nombre o email
function buscar(cliente: ICliente, nombre: string, email: string) {
  let contieneNombre = cliente.nombre?.toUpperCase().includes(nombre.trim().toUpperCase());
  let contieneEmail = cliente.email?.toUpperCase().includes(email.trim().toUpperCase());
  return contieneNombre || contieneEmail;
}
*/
