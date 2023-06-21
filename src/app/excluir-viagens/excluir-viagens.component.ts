import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-viagens',
  templateUrl: './excluir-viagens.component.html',
  styleUrls: ['./excluir-viagens.component.css'],
})
export class ExcluirViagensComponent {
  excluirText: string = 'Excluir';
  alertDisplay: string = 'd-none';

  handleClick() {
    if (this.alertDisplay === 'd-none') {
      this.excluirText = 'Confirmar';
      this.alertDisplay = 'd-block';
      return;
    }
    console.log("excluir")
  }
}
