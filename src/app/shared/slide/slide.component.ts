import { Component, Input, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {

}
