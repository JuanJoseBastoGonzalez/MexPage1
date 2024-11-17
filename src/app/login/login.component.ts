/* import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <div class="form-group">
        <input 
          type="email" 
          [(ngModel)]="email" 
          placeholder="Ingresa tu correo"
          class="form-control"
        >
      </div>
      <div class="button-group">
        <button (click)="onLogin()">Login</button>
        <button (click)="goToHome()">Ir a Home</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      text-align: center;
    }
    .form-group {
      margin: 20px 0;
    }
    .form-control {
      width: 100%;
      padding: 8px;
      margin: 8px 0;
    }
    .button-group {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class LoginComponent {
  email: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email) {
      alert(`Iniciando sesión con el correo: ${this.email}`);
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, ingresa tu correo electrónico.');
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
} */
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { RouterModule } from '@angular/router';
  
  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'], // O './login.component.scss' si usas Sass
  })
  export class LoginComponent {
    email: string = '';
  
    constructor(private router: Router) {}
  
    onLogin(): void {
      if (this.email) {
        alert(`Iniciando sesión con el correo: ${this.email}`);
        this.router.navigate(['/home']);
      } else {
        alert('Por favor, ingresa tu correo electrónico.');
      }
    }
  
    goToHome(): void {
      this.router.navigate(['/home']);
    }
  }
  