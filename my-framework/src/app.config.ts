import { Router } from './router';
import { routes } from './routes';

export const appConfig = {
  providers: [
    { provide: 'router', useFactory: () => new Router(routes) }
  ]
};
