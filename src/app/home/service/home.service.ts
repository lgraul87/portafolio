import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, private router: Router) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getDynamicComponentParameters() {
    const firstTitleCard = `Welcome,
Everyone!`;

    const firstDescriptionCard = `I am an Angular Developer,
and this is my portfolio.

here you can find examples
of my work. Enjoy it!
Thanks for your visit!`;

    const firstButtonCardText = `TAKE A LOOK NOW`;

    const thirdTitleCardSeo = `Angular Seo Web`;
    const thirdDescriptionCardSeo = `With Angular Universal`;

    const thirdTitleCardMicrofront = `Micro Frontend`;
    const thirdDescriptionCardModuleFederation = `With Module Federation`;
    const thirdButtonCardText = `TAKE A LOOK NOW`;

    const thirdthTitleCardTest = `Unit Test`;
    const thirdDescriptionCardTest = `With Karma and Jasmine`;

    const forthTitleCardCarousel = `Skills ...`;

    return {
      firstTitleCard,
      firstDescriptionCard,
      firstButtonCardText,
      thirdTitleCardSeo,
      thirdDescriptionCardSeo,
      thirdTitleCardMicrofront,
      thirdDescriptionCardModuleFederation,
      thirdButtonCardText,
      thirdthTitleCardTest,
      thirdDescriptionCardTest,
      forthTitleCardCarousel
    }
  }

  nextImage(currentIndex: any, transform: any, transition: any, images: any) {
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

  setHeaderActions() {
    const fullNameHeaderTabNavigation = this.renderer.createElement("p");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "color", "white");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "padding", "10px");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "position", "absolute");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "left", "10px");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "margin-bottom", "0px");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "font-size", "32px");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "font-family", "sans serif");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "letter-spacing", "-2px");
    this.renderer.setStyle(fullNameHeaderTabNavigation, "font-weight", "700");
    this.renderer.appendChild(fullNameHeaderTabNavigation, this.renderer.createText("Raúl Lora Gómez"));

    const span = this.renderer.createElement("span");
    this.renderer.appendChild(span, this.renderer.createText("person"));
    this.renderer.setStyle(span, "color", "white");
    this.renderer.setStyle(span, "position", "absolute");
    this.renderer.setStyle(span, "right", "90px");
    this.renderer.setStyle(span, "font-size", "40px");
    this.renderer.setStyle(span, "font-weight", "200");
    this.renderer.setStyle(span, "cursor", "pointer");
    this.renderer.addClass(span, "material-symbols-outlined");
    this.renderer.listen(span, 'click', () => this.navigateToContact());

    const firstHeaderTabNavigation = this.renderer.createElement("p");
    this.renderer.setStyle(firstHeaderTabNavigation, "color", "white");
    this.renderer.setStyle(firstHeaderTabNavigation, "padding", "20px");
    this.renderer.setStyle(firstHeaderTabNavigation, "margin-bottom", "0px");
    this.renderer.setStyle(firstHeaderTabNavigation, "cursor", "pointer");
    this.renderer.appendChild(firstHeaderTabNavigation, this.renderer.createText("ABOUT ME"));
    this.renderer.listen(firstHeaderTabNavigation, 'click', () => this.navigateToAboutMe());

    this.renderer.listen(firstHeaderTabNavigation, 'mouseenter', () => {
      if (window.scrollY > 50) {
        this.renderer.setStyle(firstHeaderTabNavigation, "background-image", "linear-gradient(to right, black, black)");
      }
      if (window.scrollY <= 50) {
        this.renderer.setStyle(firstHeaderTabNavigation, "background-image", "linear-gradient(to right, white, white)");
      }
      this.renderer.setStyle(firstHeaderTabNavigation, "background-size", "100% 2px");
      this.renderer.setStyle(firstHeaderTabNavigation, "background-repeat", "no-repeat");
      this.renderer.setStyle(firstHeaderTabNavigation, "background-position", "bottom");
      this.renderer.setStyle(firstHeaderTabNavigation, "transition", "background-size 0.3s ease-in-out");
    });

    this.renderer.listen(firstHeaderTabNavigation, 'mouseleave', () => {
      this.renderer.setStyle(firstHeaderTabNavigation, "background-size", "0% 2px");
    });

    const secondHeaderTabNavigation = this.renderer.createElement("p");
    this.renderer.setStyle(secondHeaderTabNavigation, "color", "white");
    this.renderer.setStyle(secondHeaderTabNavigation, "padding", "20px");
    this.renderer.setStyle(secondHeaderTabNavigation, "margin-bottom", "0px");
    this.renderer.appendChild(secondHeaderTabNavigation, this.renderer.createText("PROJECT EXAMPLES"));
    this.renderer.setStyle(secondHeaderTabNavigation, "cursor", "pointer");
    this.renderer.listen(secondHeaderTabNavigation, 'click', () => this.navigateToProjectsExamples());
    this.renderer.listen(secondHeaderTabNavigation, 'mouseenter', () => {
      if (window.scrollY > 50) {
        this.renderer.setStyle(secondHeaderTabNavigation, "background-image", "linear-gradient(to right, black, black)");
      }
      if (window.scrollY <= 50) {
        this.renderer.setStyle(secondHeaderTabNavigation, "background-image", "linear-gradient(to right, white, white)");
      }
      this.renderer.setStyle(secondHeaderTabNavigation, "background-size", "100% 2px");
      this.renderer.setStyle(secondHeaderTabNavigation, "background-repeat", "no-repeat");
      this.renderer.setStyle(secondHeaderTabNavigation, "background-position", "bottom");
      this.renderer.setStyle(secondHeaderTabNavigation, "transition", "background-size 0.3s ease-in-out");
    });

    this.renderer.listen(secondHeaderTabNavigation, 'mouseleave', () => {
      this.renderer.setStyle(secondHeaderTabNavigation, "background-size", "0% 2px");
    });

    const thirdHeaderTabNavigation = this.renderer.createElement("p");
    this.renderer.setStyle(thirdHeaderTabNavigation, "color", "white");
    this.renderer.setStyle(thirdHeaderTabNavigation, "padding", "20px");
    this.renderer.setStyle(thirdHeaderTabNavigation, "margin-bottom", "0px");
    this.renderer.appendChild(thirdHeaderTabNavigation, this.renderer.createText("REPOSITORY"));
    this.renderer.setStyle(thirdHeaderTabNavigation, "cursor", "pointer");
    this.renderer.listen(thirdHeaderTabNavigation, 'click', () => this.navigateToRepository());
    this.renderer.listen(thirdHeaderTabNavigation, 'mouseenter', () => {
      if (window.scrollY > 50) {
        this.renderer.setStyle(thirdHeaderTabNavigation, "background-image", "linear-gradient(to right, black, black)");
      }
      if (window.scrollY <= 50) {
        this.renderer.setStyle(thirdHeaderTabNavigation, "background-image", "linear-gradient(to right, white, white)");
      }
      this.renderer.setStyle(thirdHeaderTabNavigation, "background-size", "100% 2px");
      this.renderer.setStyle(thirdHeaderTabNavigation, "background-repeat", "no-repeat");
      this.renderer.setStyle(thirdHeaderTabNavigation, "background-position", "bottom");
      this.renderer.setStyle(thirdHeaderTabNavigation, "transition", "background-size 0.3s ease-in-out");
    });

    this.renderer.listen(thirdHeaderTabNavigation, 'mouseleave', () => {
      this.renderer.setStyle(thirdHeaderTabNavigation, "background-size", "0% 2px");
    });

    const header = this.renderer.selectRootElement(`app-desktop-header`);

    this.renderer.appendChild(header, fullNameHeaderTabNavigation);
    this.renderer.appendChild(header, span);
    this.renderer.appendChild(header, firstHeaderTabNavigation);
    this.renderer.appendChild(header, secondHeaderTabNavigation);
    this.renderer.appendChild(header, thirdHeaderTabNavigation);

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('app-desktop-header-scrolled');
        header.classList.add('bg-fade-in');
        span.style.color = "black";
        fullNameHeaderTabNavigation.style.color = "black";

        firstHeaderTabNavigation.style.color = "black";

        secondHeaderTabNavigation.style.color = "black";
        thirdHeaderTabNavigation.style.color = "black";
      } else {
        header.classList.remove('app-desktop-header-scrolled');
        header.classList.remove('bg-fade-in');
        span.style.color = "white";
        fullNameHeaderTabNavigation.style.color = "white";
        firstHeaderTabNavigation.style.color = "white";
        secondHeaderTabNavigation.style.color = "white";
        thirdHeaderTabNavigation.style.color = "white";
      }
    });

  }
  navigateToContact() {
    this.router.navigate(["contact"]);
  }

  navigateToAboutMe() {
    this.router.navigate(["about-me"]);
  }

  navigateToProjectsExamples() {
    this.router.navigate(["project-examples"]);
  }

  navigateToRepository() {
    this.router.navigate(["repository"]);
  }

  repeatElementsArray(repeatTimes: any, images: any) {
    return Array(repeatTimes).fill(images).flat();
  }
}
