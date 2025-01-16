import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent{
  public hora : string = "";
  
  constructor() {
    setInterval(()=> {
      this.actualizarReloj();
    }, 1000);
    this.actualizarReloj();
  }
  
  actualizarReloj() {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');
    this.hora = `${horas}:${minutos}:${segundos}`;
  }
}