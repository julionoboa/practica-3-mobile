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
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
