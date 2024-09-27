import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;
  constructor() { }

  ngOnInit() {
  }

  sumar() {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 + this.numero2;
    } else {
      this.resultado = null; 
    }
  }

}
