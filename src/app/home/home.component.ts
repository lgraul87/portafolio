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
import { interval, Subscription } from 'rxjs';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dynamicComponentParameters: any;

  startCarouselSubscription!: Subscription;
  currentIndex: number = 0;
  transform: string = 'translateX(0%)';
  transition: string = 'transform 0.5s ease';

  displayedImages: string[] = [];
  repeatTimes = 20;
  firstImageCarousel = './../../assets/slide-1.png';
  secondImageCarousel = './../../assets/slide-2.png';
  thirdImageCarousel = './../../assets/slide-3.png';
  images: string[] = [
    this.firstImageCarousel,
    this.secondImageCarousel,
    this.thirdImageCarousel,
  ];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.initHomeComponent();
  }

  ngOnDestroy() {
    this.homeService.destroySubscription(this.startCarouselSubscription);
  }

  private initHomeComponent() {
    this.dynamicComponentParameters = this.homeService.getDynamicComponentParameters();
    this.homeService.setHeaderActions();
    this.displayedImages = this.homeService.repeatElementsArray(this.repeatTimes, this.images);
    this.startCarouselSubscription = this.homeService.startCarousel().subscribe(() => {
      const carousel = this.homeService.nextImage(this.currentIndex, this.transform, this.transition, this.images);
      this.currentIndex = carousel.currentIndex;
      this.transform = carousel.transform;
      this.transition = carousel.transition;
      this.images = carousel.images;
    });
  }

}
