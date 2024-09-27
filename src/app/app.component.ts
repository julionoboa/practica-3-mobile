import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator'},
    { title: 'Traductor', url: '/traductor', icon: 'language'},
    { title: 'Tabla de Multiplicar', url: '/multiplicar', icon: 'grid' },
    { title: 'Experiencia Personal', url: '/experiencia', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
