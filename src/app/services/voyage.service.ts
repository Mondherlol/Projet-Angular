import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private Voyage: Voyage[]=[
    
    new Voyage (1, 'Hokkaido', 6000, 
    'Une autre approche du Japon, hors des sentiers battus ou pour un second voyage, au volant et en liberté','Hokkaido.jfif','Hokkaido','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0),
    ];
    getVoyage(){
      return this.Voyage;
    }
  constructor() { }
 
}
