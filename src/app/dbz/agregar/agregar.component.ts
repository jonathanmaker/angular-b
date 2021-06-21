import { Component, Input, Output,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
 
export class AgregarComponent {

  

  @Input() nuevo: personaje = {
    nombre: '',
    poder:0
  }

  @Output() onNewPerson : EventEmitter <personaje> = new EventEmitter();
  
  agregar(){
    if ( this.nuevo.nombre.trim().length === 0){return;}
    console.log(this.nuevo);

    this.onNewPerson.emit(this.nuevo);

    
    this.nuevo= {
      nombre:'',
      poder:0
    }
  }

}
