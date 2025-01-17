import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {
  clientesService = inject(ClientesService);
}
