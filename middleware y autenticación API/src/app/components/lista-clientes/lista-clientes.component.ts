import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clientesService.getAll()
      .then(response => {
        console.log('RESPONSE', response);
      })
      .catch(error => {
        console.log('ERROR', error);
      })
  }

}
