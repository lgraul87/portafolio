import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DesktopHeaderComponent } from '../shared/desktop-header/desktop-header.component';
import { DesktopFooterComponent } from '../shared/desktop-footer/desktop-footer.component';
import { DesktopContainerComponent } from '../shared/desktop-container/desktop-container.component';
import {
  desktopFirstContainer, desktopFirstContainerLeftSide, desktopFirstTape,
  desktopSecondContainer, desktopThirdContainer, desktopFourthContainer,
  desktopFifthContainer, desktopSixthContainer, desktopAnimatedAd, desktopFaqs
} from './home.grid'
import { SlideComponent } from '../shared/slide/slide.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DesktopHeaderComponent, DesktopFooterComponent, DesktopContainerComponent, SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  desktopFirstContainer = desktopFirstContainer;
  desktopFirstContainerLeftSide = desktopFirstContainerLeftSide;
  desktopFirstTape = desktopFirstTape;
  desktopSecondContainer = desktopSecondContainer;
  desktopThirdContainer = desktopThirdContainer;
  desktopFourthContainer = desktopFourthContainer;
  desktopFifthContainer = desktopFifthContainer;
  desktopSixthContainer = desktopSixthContainer;
  desktopAnimatedAd = desktopAnimatedAd;
  desktopFaqs = desktopFaqs;

  slideComponent: any = SlideComponent;


}





