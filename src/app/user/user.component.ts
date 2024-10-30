import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router) {}

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
