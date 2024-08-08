import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DesktopContainerService } from './service/desktop-container.service';

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
  cardComponent!: any;

  @Input()
  id !: any;

  @Input()
  appDesktopContainerClass!: any;

  componentToSend = {
    component: this.id,
  };

  constructor(private desktopContainerService: DesktopContainerService) { }

  ngAfterViewInit(): void {
    if (this.id === 'desktop-first-container-left-side') {
      const content = this.setCardComponentPropertiesByDesktopFirstContainerLeftSide(this.id);
      this.buildCardComponent(content);
    }
    if (this.id === 'desktop-fourth-container') {
      const content = this.setCardComponentPropertiesByDesktopFourthContainer(this.id);
      this.buildCardComponent(content);
    }
    if (this.id === 'desktop-fourth-container-right') {
      const content = this.setCardComponentPropertiesByDesktopFourthContainerRight(this.id);
      this.buildCardComponent(content);
    }
  }

  // CUSTOMS METHODS
  private setCardComponentPropertiesByDesktopFirstContainerLeftSide(id: string) {
    return this.desktopContainerService.setCardComponentPropertiesByDesktopFirstContainerLeftSide(id);
  }

  private setCardComponentPropertiesByDesktopFourthContainer(id: string) {
    return this.desktopContainerService.setCardComponentPropertiesByDesktopFourthContainer(id);
  }

  private setCardComponentPropertiesByDesktopFourthContainerRight(id: string) {
    return this.desktopContainerService.setCardComponentPropertiesByDesktopFourthContainerRight(id);
  }

  // GENERAL METHODS
  private buildCardComponent(content: any) {
    this.desktopContainerService.buildCardComponent(this.id, content, this.appDesktopContainerClass);
  }

}




