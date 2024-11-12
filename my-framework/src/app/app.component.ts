export class AppComponent {
  render() {
    const appRoot = document.querySelector('app-root');
    if (appRoot) {
      fetch('./app/app.component.html')
        .then(response => response.text())
        .then(template => {
          appRoot.innerHTML = template;
        });
    }
  }
}
