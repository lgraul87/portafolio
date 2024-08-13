import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DesktopContainerService } from './service/desktop-container.service';

@Component({
  selector: 'app-desktop-container',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule],
  templateUrl: './desktop-container.component.html',
  styleUrl: './desktop-container.component.css'
})
export class DesktopContainerComponent {

  constructor(private desktopContainerService: DesktopContainerService) { }

}
