import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesktopContainerService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // CUSTOMS METHODS
  setCardComponentPropertiesByDesktopFirstContainerLeftSide(id: string) {
    const firstTitle = { class: `${id}-title`, gridArea: "2/1/3/12", text: "Hello," };
    const secondTitle = { class: `${id}-title`, gridArea: "3/1/4/12", text: "everyone" };
    const description = { class: `${id}-description`, gridArea: "5/1/9/12", text: `My name is Raúl Lora and I am a Front End Angular Developer. Visit my site and you can find examples of my work.` };
    const button = { class: `${id}-button`, gridArea: "11/1/12/12", text: "YOU CAN TAKE A LOOK NOW" };
    const content = { firstTitle, secondTitle, description, button };
    return content;
  }

  setCardComponentPropertiesByDesktopFourthContainer(id: string) {
    const firstTitle = { class: `${id}-title`, gridArea: "2/1/3/12", text: "Hello," };
    const secondTitle = { class: `${id}-title`, gridArea: "3/1/4/12", text: "everyone" };
    const description = { class: `${id}-description`, gridArea: "5/1/9/12", text: `My name is Raúl Lora and I am a Front End Angular Developer. Visit my site and you can find examples of my work.` };
    const button = { class: `${id}-button`, gridArea: "11/1/12/12", text: "YOU CAN TAKE A LOOK NOW" };
    const content = { firstTitle, secondTitle, description, button };
    return content;
  }

  // GENERAL METHODS
  buildCardComponent(id: string, content: any, appDesktopContainerClass: string) {
    const firstTitle = this.renderer.selectRootElement(`#firstTitle`);
    const secondTitle = this.renderer.selectRootElement('#secondTitle');
    const description = this.renderer.selectRootElement('#description');
    const button = this.renderer.selectRootElement('#button');
    const cardComponentContainer = this.renderer.selectRootElement('#card-component-container');

    this.renderer.setAttribute(firstTitle, 'id', `${id}-firstTitle`);
    this.renderer.setAttribute(secondTitle, 'id', `${id}-secondTitle`);
    this.renderer.setAttribute(description, 'id', `${id}-description`);
    this.renderer.setAttribute(button, 'id', `${id}-button`);
    this.renderer.setAttribute(cardComponentContainer, 'id', `${id}-card-component-container`);

    this.renderer.addClass(firstTitle, content.firstTitle.class);
    this.renderer.setStyle(firstTitle, 'grid-area', content.firstTitle.gridArea);
    this.renderer.appendChild(firstTitle, this.renderer.createText(content.firstTitle.text));

    this.renderer.addClass(secondTitle, content.secondTitle.class);
    this.renderer.setStyle(secondTitle, 'grid-area', content.secondTitle.gridArea);
    this.renderer.appendChild(secondTitle, this.renderer.createText(content.secondTitle.text));

    this.renderer.addClass(description, content.description.class);
    this.renderer.setStyle(description, 'grid-area', content.description.gridArea);
    this.renderer.appendChild(description, this.renderer.createText(content.description.text));

    this.renderer.addClass(button, content.button.class);
    this.renderer.setStyle(button, 'grid-area', content.button.gridArea);
    this.renderer.appendChild(button, this.renderer.createText(content.button.text));

    this.renderer.appendChild(cardComponentContainer, firstTitle);
    this.renderer.appendChild(cardComponentContainer, secondTitle);
    this.renderer.appendChild(cardComponentContainer, description);
    this.renderer.appendChild(cardComponentContainer, button);
    this.renderer.addClass(cardComponentContainer, `${appDesktopContainerClass}-container`);
  }
}
