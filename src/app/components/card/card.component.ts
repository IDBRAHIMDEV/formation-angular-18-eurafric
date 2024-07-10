import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() id: number = 0
  @Input() avatar: string = ""
  @Input() login: string = ""

}
