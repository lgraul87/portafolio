import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, CardComponent],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'portfolio';
  cardComponent: any = CardComponent;
}
