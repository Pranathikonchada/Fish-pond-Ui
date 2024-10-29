import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router) {}

  navigateToRegister() {
    // Logic to navigate to user registration page
    alert('User registration is under development.');
  }
}
