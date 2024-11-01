import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'flex'; // Show modal
    }
  }

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
    this.router.navigate(['/register']); // Navigate to Register component
    this.closeModal(); // Close modal after navigation
  }
}
