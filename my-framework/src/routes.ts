import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes = [
  { path: '/', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];
