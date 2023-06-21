import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controleViagens';

}

export interface Viagem {
  id: number;
  destino: string;
  tipo: string;
  dataChegada: string;
  dataSaida: string;
  orcamento: number;
  quantidadePessoas: number;
}

export const viagens: Viagem[] = [{
  id: 1,
  destino: 'Acapulco',
  tipo: 'LAZER',
  dataChegada: '2021-06-08',
  dataSaida: '2021-06-18',
  orcamento: 1000,
  quantidadePessoas: 1,
},
{
  id: 2,
  destino: 'Egito (Cairo)',
  tipo: 'LAZER',
  dataChegada: '2021-06-20',
  dataSaida: '2021-06-28',
  orcamento: 2000,
  quantidadePessoas: 1,
},
{
  id: 3,
  destino: 'Nova Zelandia',
  tipo: 'LAZER',
  dataChegada: '2021-09-04',
  dataSaida: '2021-10-11',
  orcamento: 3400,
  quantidadePessoas: 2,
},
{
  id: 4,
  destino: 'Australia',
  tipo: 'LAZER',
  dataChegada: '2021-09-07',
  dataSaida: '2021-09-27',
  orcamento: 2450,
  quantidadePessoas: 3,
}];
