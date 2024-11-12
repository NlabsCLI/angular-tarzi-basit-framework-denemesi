import { Component } from "../../component";

export class LoginComponent extends Component {
  constructor() {
    super('./components/login.component.html', 'app-root');
  }

  async render(): Promise<void> {
    await super.render();
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const form = document.getElementById('loginForm') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        // Basit bir doğrulama
        if (username === 'admin' && password === '1234') {
          alert('Login successful!');
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
}
