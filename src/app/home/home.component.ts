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

  firstImageCarousel = './../../assets/slide-1.png';
  secondImageCarousel = './../../assets/slide-2.png';
  thirdImageCarousel = './../../assets/slide-3.png';


  images: string[] = [
    this.firstImageCarousel,
    this.secondImageCarousel,
    this.thirdImageCarousel,
  ];


  displayedImages: string[] = [];
  currentIndex: number = 0;
  transform: string = 'translateX(0%)';
  transition: string = 'transform 0.5s ease';
  intervalSub!: Subscription;

  repeatTimes = 20;

  constructor(private homeService: HomeService) { }
  private setHeaderActions() {
    this.homeService.setHeaderActions();
  }

  ngOnInit(): void {
    const repeatedArray = Array(this.repeatTimes).fill(this.images).flat();
    this.displayedImages = [...repeatedArray, this.images[0]];
    this.startCarousel();
    this.dynamicComponentParameters = this.homeService.getDynamicComponentParameters();
    this.setHeaderActions();

  }

  ngOnDestroy() {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
  }

  startCarousel() {
    this.intervalSub = interval(5000).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage() {
    this.currentIndex++;

    if (this.currentIndex === this.images.length) {
      this.transition = 'transform 1.4s ease';
      this.transform = `translateX(-${this.currentIndex * 20}%)`;

      setTimeout(() => {
        this.transition = 'none';
        this.transform = 'translateX(0%)';
        this.currentIndex = 0;
      }, 1500);
    } else {
      this.transition = 'transform 1.4s ease';
      this.transform = `translateX(-${this.currentIndex * 20}%)`;
    }
  }
}
