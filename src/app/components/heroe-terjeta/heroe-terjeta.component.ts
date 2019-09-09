import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-terjeta',
  templateUrl: './heroe-terjeta.component.html',
  styleUrls: ['./heroe-terjeta.component.css']
})
export class HeroeTerjetaComponent implements OnInit {

  // El input le dice a Angular que va a recibir una propiedad del padre
  @Input() heroe: any = {};
  @Input() index: number;

  // El ouput siempre va con el eventemitter
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router: Router) { 
    // Inicializamos el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index)
    // this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
