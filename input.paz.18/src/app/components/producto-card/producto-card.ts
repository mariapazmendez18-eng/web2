import { Component, input, Output, EventEmitter } from '@angular/core';

interface Alumno { 
  id: 1; nombre: 'Marìa Paz'; edad: 17; nota: Aprobado
  id: 2, nombre: 'Lorena'; edad: 18, nota: Aprobado
  id: 3, nombre: 'Samira'; edad: 17, nota: Az
}
@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {}
