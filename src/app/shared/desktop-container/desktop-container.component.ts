import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-desktop-container',
  standalone: true,
  imports: [CommonModule],
  template: `
   <p>desktop-container works!</p>
  <div #myComponentRef>
  <ng-template  *ngComponentOutlet="slideComponent"></ng-template>
  </div>
  `,
  styleUrl: './desktop-container.component.css'
})
export class DesktopContainerComponent {

  @Input()
  slideComponent!: any;

  @Input()
  color!: any;

  @ViewChild('myComponentRef', { static: true }) myComponentRef!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.slideComponent) {
      this.renderer.setStyle(this.myComponentRef.nativeElement, 'color', this.color);
    }
  }

}



