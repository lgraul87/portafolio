import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfiniteCarouselService {

  repeatElementsArray(repeatTimes: any, images: any) {
    return Array(repeatTimes).fill(images).flat();
  }

  startCarousel() {
    return interval(5000);
  }
  nextImage(currentIndex: any, transform: any, transition: any, images: any) {
    return this.nextImageCarousel(currentIndex, transform, transition, images);
  }

  nextImageCarousel(currentIndex: any, transform: any, transition: any, images: any) {
    currentIndex++;
    transform = `translateX(-${currentIndex * 20}%)`;
    transition = 'transform 1.4s ease';
    if (currentIndex === images.length) {
      setTimeout(() => {
        transition = 'none';
        transform = 'translateX(0%)';
        currentIndex = 0;
      }, 1500);
    }
    const carousel = { currentIndex, transform, transition, images }
    return carousel;
  }

  destroySubscription(startCarouselSubscription: any) {
    if (startCarouselSubscription) {
      startCarouselSubscription.unsubscribe();
    }
  }
}
