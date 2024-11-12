export class Router {
  private routes: any[];

  constructor(routes: any[]) {
    this.routes = routes;
    window.addEventListener('popstate', () => this.loadRoute());
  }

  async loadRoute(): Promise<void> {
    const path = window.location.pathname;
    const route = this.routes.find((r) => r.path === path);

    if (route && route.component) {
      const outlet = document.querySelector('router-outlet');
      if (outlet) {
        outlet.innerHTML = ''; // Mevcut içeriği temizleyin
        const componentInstance = new route.component();
        await componentInstance.render(); // İçeriği yükleyin
      }
    } else {
      console.error(`No route found for path: "${path}"`);
    }
  }

  navigate(path: string): void {
    history.pushState(null, '', path);
    this.loadRoute();
  }
}
