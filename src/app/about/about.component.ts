import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  features = [
    'Comprehensive monitoring of temperature, pH, water level, rainfall, and oxygen levels',
    'Real-time data collection with historical data storage',
    'User authentication with role-based access for Admin and User roles',
    'Graphical data representation for insightful analysis',
    'Admin control for customizable settings and parameters',
    'Secure data transmission between sensors and server',
    'Accessible on mobile and desktop with a responsive design'
  ];
}
