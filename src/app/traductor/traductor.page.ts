import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  numero: number | null = null;
  resultado: string = '';

  constructor() { }

  ngOnInit() {
  }

  traducir() {
    if (this.numero !== null && this.numero >= 1 && this.numero <= 1000) {
      this.resultado = this.convertirNumeroALetras(this.numero);
    } else {
      this.resultado = 'Por favor, ingrese un número válido entre 1 y 1000.';
    }
  }

  convertirNumeroALetras(numero: number): string {
    const unidades = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'
    ];

    const decenas = [
      '', '', 'veinti', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
    ];

    const centenas = [
      '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
    ];

    if (numero === 1000) return 'mil';

    let texto = '';

    const c = Math.floor(numero / 100);
    const d = Math.floor((numero % 100) / 10);
    const u = numero % 10;

    if (c > 0) {
      texto += centenas[c];
      if (d > 0 || u > 0) texto += ' ';
    }

    if (d === 1) {
      texto += unidades[10 + u];
    } else if (d === 2 && u === 0) {
      texto += 'veinte';
    } else if (d === 2) {
      texto += 'veinti' + unidades[u];
    } else {
      texto += decenas[d];
      if (u > 0 && d > 0) texto += ' y ';
      texto += unidades[u];
    }

    return texto;
  }

}
