import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // Property to store the user's email input
  email: string = '';

  // Property to store a Bible quote (initialized as null)
  citaBiblica: string | null = null;

  // Constructor with Router dependency injection for navigation
  constructor(private router: Router) {}

  /**
   * Method called when the user attempts to log in
   * It checks if an email is provided and navigates to the home page if valid
   * need validate whith bakend data
   */
  onLogin(): void {
    if (this.email) {
      alert(`Logging in with email: ${this.email}`);
      this.router.navigate(['/home']);
    } else {
      alert('Please enter your email address.');
    }
  }

  /**
   * Method to navigate to the registration page
   * It displays an alert with the current email before navigation
   */
  goToRegister(): void {
    alert(`Redirecting to register: ${this.email}`);
    this.router.navigate(['/register']);
  }

  /**
   * Lifecycle hook that runs when the component is initialized
   * It sets a default Bible quote (in the future, this could be fetched from an API)
   */
  ngOnInit(): void {
    this.citaBiblica = 'John 3:16 - "For God so loved the world..."';
  }
}