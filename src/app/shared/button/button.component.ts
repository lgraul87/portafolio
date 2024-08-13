import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonService } from './service/button.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input()
  buttonClass: any;

  @Input()
  text: any;

  constructor(private buttonService: ButtonService) { }

  actionButton() {
    this.buttonService.action(this.buttonClass);
  }
}
