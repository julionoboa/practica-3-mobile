import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.page.html',
  styleUrls: ['./multiplicar.page.scss'],
})
export class MultiplicarPage implements OnInit {

  numero: number | null = null;
  tabla: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  generarTabla() {
    if (this.numero !== null) {
      this.tabla = [];
      for (let i = 1; i <= 13; i++) {
        this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
      }
    } else {
      this.tabla = [];
    }
  }

}
