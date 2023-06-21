import { Component, Input } from '@angular/core';
import { Viagem, viagens } from '../app.component';

@Component({
  selector: 'app-lista-viagens',
  templateUrl: './lista-viagens.component.html',
  styleUrls: ['./lista-viagens.component.css']
})
export class ListaViagensComponent {
  listaViagens: Viagem[] = viagens;

  today : string = new Date().toLocaleDateString("pt-BR");
}
