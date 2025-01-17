import { Injectable } from '@angular/core';
import { ICliente } from '../interfaces/icliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private listaClientes = new Array<ICliente>();
  constructor() { 
    this.cargarClientes();
  }
  public addCliente(nuevoCliente : ICliente) : void {
    this.listaClientes.push({...nuevoCliente});
    console.log(this.listaClientes);
  }

  public getClientes() : Array<ICliente> {
    return this.listaClientes;
  }

  private cargarClientes(){
    let cliente1 : ICliente = {
      nombre : 'Cliente 1',
      telefono : '123456789_1',
      email : 'cliente1@gmail.com',
      dioptrias : 0.25
    };
    let cliente2 : ICliente = {
      nombre : 'Cliente 2',
      telefono : '123456789_2',
      email : 'cliente2@gmail.com',
      dioptrias : 0.50
    };
    this.listaClientes.push(cliente1);
    this.listaClientes.push(cliente2);
  }
}
