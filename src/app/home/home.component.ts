import { Component } from '@angular/core';
import { DesktopHeaderComponent } from '../shared/desktop-header/desktop-header.component';
import { DesktopFooterComponent } from '../shared/desktop-footer/desktop-footer.component';
import { DesktopContainerComponent } from '../shared/desktop-container/desktop-container.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { ImageComponent } from '../shared/image/image.component';
import { TitleComponent } from '../shared/title/title.component';
import { DescriptionComponent } from '../shared/description/description.component';
import { ButtonComponent } from '../shared/button/button.component';
import { HomeService } from './service/home.service';
import { InfiniteCarouselComponent } from '../shared/infinite-carousel/infinite-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DesktopHeaderComponent,
    DesktopFooterComponent,
    DesktopContainerComponent,
    CardComponent,
    ImageComponent,
    TitleComponent,
    DescriptionComponent,
    ButtonComponent,
    InfiniteCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dynamicComponentParameters: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.initHomeComponent();
  }

  private initHomeComponent() {
    this.dynamicComponentParameters = this.homeService.getDynamicComponentParameters();
    this.homeService.setHeaderActions();
  }
}
