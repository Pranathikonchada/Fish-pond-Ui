import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Method to handle form submission
  onRegister() {
    console.log('Registration form submitted');
    // Here, you would typically call a service to send form data to your backend
  }
}
