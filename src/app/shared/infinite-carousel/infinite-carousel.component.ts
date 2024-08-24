import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselService } from './service/infinite-carousel.service';

@Component({
  selector: 'app-infinite-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.css'
})
export class InfiniteCarouselComponent {

  startCarouselSubscription!: Subscription;
  currentIndex: number = 0;
  transform: string = 'translateX(0%)';
  transition: string = 'transform 0.5s ease';

  displayedImages: string[] = [];
  repeatTimes = 20;

  @Input()
  firstInfiniteCarouselImage!: any;

  @Input()
  secondInfiniteCarouselImage!: any;

  @Input()
  thirdInfiniteCarouselImage!: any;

  constructor(private infiniteCarouselService: InfiniteCarouselService) { }

  ngOnChanges(): void {
    let images = [this.firstInfiniteCarouselImage, this.secondInfiniteCarouselImage, this.thirdInfiniteCarouselImage];
    this.displayedImages = this.infiniteCarouselService.repeatElementsArray(this.repeatTimes, images);
    this.startCarouselSubscription = this.infiniteCarouselService.startCarousel().subscribe(() => {
      const carousel = this.infiniteCarouselService.nextImage(this.currentIndex, this.transform, this.transition, images);
      this.currentIndex = carousel.currentIndex;
      this.transform = carousel.transform;
      this.transition = carousel.transition;
      images = carousel.images;
    });
  }

  ngOnDestroy() {
    this.infiniteCarouselService.destroySubscription(this.startCarouselSubscription);
  }
}
