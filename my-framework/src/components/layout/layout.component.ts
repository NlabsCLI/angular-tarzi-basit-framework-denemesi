import { Component } from "../../component";

export class LayoutComponent extends Component {
  constructor() {
    super('./components/layout/layout.component.html', 'app-root');
  }

  async render(): Promise<void> {
    await super.render(); // Ana düzeni yükler
  }
}
