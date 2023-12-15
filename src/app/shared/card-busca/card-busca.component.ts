import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent {
  @Input() id!: number;
  @Input() destino: String = '';
  @Input() imagem: String = '';
  @Input() preco: number = 0;
}
