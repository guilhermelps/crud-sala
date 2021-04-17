import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home', icon: 'home' },
    { title: 'Ambiente', url: '/pages/room', icon: 'grid' },
    { title: 'Embarcado', url: '/pages/hardware', icon: 'desktop' },
    { title: 'Sair', url: '/authentication/login', icon: 'exit' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {}
}
