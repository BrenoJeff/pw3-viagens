import { Viagem } from './../app.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-viagens',
  templateUrl: './detalhe-viagens.component.html',
  styleUrls: ['./detalhe-viagens.component.css'],
})
export class DetalheViagensComponent {
  @Input()
  viagemSelecionada?: Viagem;

  viagem: Viagem = {
    id: this.viagemSelecionada?.id ?? 0,
    destino: this.viagemSelecionada?.destino ?? "",
    tipo: this.viagemSelecionada?.tipo ?? "",
    dataChegada: this.viagemSelecionada?.dataChegada ?? "",
    dataSaida: this.viagemSelecionada?.dataSaida ?? "",
    orcamento: this.viagemSelecionada?.orcamento ?? 0,
    quantidadePessoas: this.viagemSelecionada?.quantidadePessoas ?? 0,
  };
}
