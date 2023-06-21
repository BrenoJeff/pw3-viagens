import { Component, Input } from '@angular/core';
import { Viagem } from '../app.component';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent {
  @Input() viagem?: Viagem;
}
