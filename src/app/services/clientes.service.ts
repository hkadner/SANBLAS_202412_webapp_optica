import { inject, Injectable } from '@angular/core';
import { ICliente } from '../interfaces/icliente';
import { LocalStorageService } from './local-storage.service';

const KEY_CLIENTES : string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private localStorageService = inject(LocalStorageService);
  private listaClientes = new Array<ICliente>();
  constructor() { 
    this.cargarClientes();
  }
  public addCliente(nuevoCliente : ICliente) : void {
    this.listaClientes.push({...nuevoCliente});
    this.localStorageService.store(KEY_CLIENTES, JSON.stringify(this.listaClientes));//stringify convierte a cadena de caracteres
    console.log(this.listaClientes);
  }

  public getClientes() : Array<ICliente> {
    return this.listaClientes;
  }

  private cargarClientes(){
    let stringClientes = this.localStorageService.retrieve(KEY_CLIENTES);
    let clientesAlmacenados = stringClientes!=null ? JSON.parse(stringClientes) : [];
    clientesAlmacenados.forEach((cliente: ICliente)  => {
      this.listaClientes.push(cliente);
    });
  }
  
}
