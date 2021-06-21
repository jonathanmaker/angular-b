import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  personajes: personaje[]=[
    {
      nombre: 'gokuma',
      poder: 15000
    },
    {
      nombre: 'vergeta',
      poder: 8000
    }
  ];

  nuevo: personaje = {
    nombre:'ivan',
    poder:1000
  }

 

}
