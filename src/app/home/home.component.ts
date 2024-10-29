import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sensors = [
    { name: 'pH Level', value: '7.5', description: 'To maintain pH level of the pond.', icon: '🌡️' },
    { name: 'Oxygen Level', value: '8 mg/L', description: 'Dissolved oxygen in the pond.', icon: '💧' },
    { name: 'Temperature', value: '25°C', description: 'Water temperature in the pond.', icon: '🌞' },
    { name: 'Water Level', value: '3 meters', description: 'Current water level in the pond.', icon: '🌊' },
    { name: 'Rainfall', value: '12 mm', description: 'Rainfall accumulation in the area.', icon: '☔' },
    { name: 'Real-Time Sensor', value: 'Active', description: 'Provides real-time monitoring data.', icon: '📡' }
  ];
ponds: any;

  
}
