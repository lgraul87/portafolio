import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-desktop-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './desktop-container.component.html',
  styleUrl: './desktop-container.component.css'
})
export class DesktopContainerComponent {

  @Input()
  slideComponent!: any;

  @Input()
  childBackgroundcolor!: any;

  @Input()
  childGridArea!: any;

  @Input()
  component!: any;

  @ViewChild('myComponentRef', { static: true }) myComponentRef!: ElementRef;

  @Input()
  appDesktopContainerClass!: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.component === 'desktopFirstContainerLeftSide') {
      this.desktopFirstContainerLeftSide();
    }

  }


  // TWO TITLES, ONE DESCRPTION AND ONE BUTTON CONTAINER
  private desktopFirstContainerLeftSide() {

    const first = this.renderer.selectRootElement('#firstTitle');
    const second = this.renderer.selectRootElement('#secondTitle');
    const descrip = this.renderer.selectRootElement('#description');
    const button = this.renderer.selectRootElement('#button');
    const div = this.renderer.selectRootElement('#dives');


    this.renderer.addClass(first, 'title');
    this.renderer.setStyle(first, 'grid-area', '2/1/3/12');
    this.renderer.appendChild(first, this.renderer.createText(`Hello,`));

    this.renderer.addClass(second, 'title');
    this.renderer.setStyle(second, 'grid-area', '3/1/4/12');
    this.renderer.appendChild(second, this.renderer.createText(`welcome`));

    this.renderer.addClass(descrip, 'description');
    this.renderer.setStyle(descrip, 'grid-area', '4/1/8/12');
    this.renderer.appendChild(descrip, this.renderer.createText(`
    My name is Raúl Lora and I am a Front End Angular Developer.
    Visit my site and you can find examples of my work.`));

    this.renderer.addClass(button, 'button');
    this.renderer.setStyle(button, 'grid-area', '11/1/12/12');
    this.renderer.appendChild(button, this.renderer.createText('YOU CAN TAKE A LOOK NOW'));

    this.renderer.appendChild(div, first);
    this.renderer.appendChild(div, second);
    this.renderer.appendChild(div, descrip);
    this.renderer.appendChild(div, button);
    this.renderer.addClass(div, 'dives');
  }
}




