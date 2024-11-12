export class Component {
  templateUrl: string;
  selector: string;

  constructor(templateUrl: string, selector: string) {
    this.templateUrl = templateUrl;
    this.selector = selector;
  }

  async render(): Promise<void> {
    const element = document.querySelector(this.selector);
    if (element) {
      const response = await fetch(this.templateUrl);
      const template = await response.text();
      element.innerHTML = template;
    } else {
      console.error(`Element with selector "${this.selector}" not found.`);
    }
  }
}
