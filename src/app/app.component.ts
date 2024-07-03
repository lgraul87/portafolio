import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './shared/slide/slide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,SlideComponent],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'portfolio';
  slideComponent: any = SlideComponent;
}
