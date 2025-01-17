import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICliente } from '../../interfaces/icliente';
import { ClientesService } from '../../services/clientes.service';
import { NgStyle, UpperCasePipe } from '@angular/common';

const TIEMPO_MENSAJE = 3000;

@Component({
  selector: 'app-nuevo-cliente',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgStyle],
  templateUrl: './nuevo-cliente.component.html',
  styleUrl: './nuevo-cliente.component.css'
})
export class NuevoClienteComponent {
  clientesService = inject(ClientesService);
  cliente : ICliente = {}
  mensaje : string = "";
  estilo : any;
  estiloError = {
    color : 'red'
  }
  estiloInfo = {
    color : 'green'
  }

  addCliente(){
    if (this.validarCliente()===true) {
      this.clientesService.addCliente(this.cliente);
      this.cliente = {}
      this.mostrarMensaje("Cliente guardado", TipoMensaje.Info);
    }
  }

  private mostrarMensaje(mensaje : string, tipo : TipoMensaje) {
    if (tipo==TipoMensaje.Error) {
      this.estilo = this.estiloError;
    } else if (tipo==TipoMensaje.Info) {
      this.estilo = this.estiloInfo;
    }
    this.mensaje = mensaje;
    setTimeout(()=> {
      this.mensaje = "";
    }, TIEMPO_MENSAJE);
  }

  validarCliente() : boolean {
    if (this.cliente.nombre==undefined || this.cliente.nombre?.trim()==""){
      this.mostrarMensaje("Nombre de cliente vacío", TipoMensaje.Error);
      return false;
    }
    return true;
  }
}

enum TipoMensaje {
  Error = 1,
  Info = 2
}