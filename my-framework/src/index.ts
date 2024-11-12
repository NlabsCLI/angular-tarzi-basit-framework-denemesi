import { appConfig } from './app.config';

function bootstrap(config: any) {
  const routerProvider = config.providers.find((provider: { provide: string; }) => provider.provide === 'router');
  const router = routerProvider?.useFactory();

  if (router) {
    router.loadRoute(); // İlk rotayı yükler

    // Tüm linklere `navigate` işlevini bağlayın
    document.querySelectorAll('[data-link]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        router.navigate(target.pathname); // Rota değiştirme işlemi
      });
    });
  } else {
    console.error("Router could not be initialized.");
  }
}

bootstrap(appConfig);
