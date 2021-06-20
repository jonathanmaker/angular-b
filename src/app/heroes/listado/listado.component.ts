import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Pareman','baironman','chipamocli','matapacos']
  heroeBorrado: string = '';


  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
  
}
