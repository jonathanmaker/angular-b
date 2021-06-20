import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    
     <h1>{{title}}</h1>
 
     <h2>La base es de <strong>{{base}}</strong></h2>
     
     <button (click)="operator(base)">+{{base}}</button>
     <span>{{numero}}</span>
     <button (click)="operator(- base)">-{{base}}</button> 

    
    
    `
})

export class contadorComponent{

    title: string= 'Contador App';
    numero: number = 0;
    base: number = 5;
  
  
  operator(base:number){
    this.numero += base;
  }

}