import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToUser() {
    this.router.navigate(['/user']); // Navigate to User Login component
    this.closeModal(); // Close modal after navigation
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']); // Navigate to Admin Login component
    this.closeModal(); // Close modal after navigation
  }

  closeModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'none'; // Hide modal
    }
  }

  register() {
    // Navigate to the registration page. You can change the path as needed.
    this.router.navigate(['/register']); // Navigate to Register component
    this.closeModal(); // Close modal after navigation
  }
}
