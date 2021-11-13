import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private Voyage: Voyage[]=[
    
    new Voyage (1, 'Hokkaido', 6000, 
    'Une autre approche du Japon, hors des sentiers battus ou pour un second voyage, au volant et en liberté',
    'assets/Hokkaido.jfif','Hokkaido','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0),
    new Voyage (2, 'tohoku',6000, 
    'parmi les plus authentiques du Japon, des trésors historiques, des activités de plein air en été et une neige poudreuse abondante en hiver','assets/Tohoku.jfif','tohoku','10 jours',
    new Date(1/12/2022),new Date(11/12/2022),false,0),
    new Voyage (3, 'Hokuriku Shinetsu',6000, 
    'Mer et montagnes se côtoient dans lune des régions les plus sauvages du Japon, offrant un paysage de toute beauté','assets/Hokuriku Shinetsu.jfif'
    ,'Hokuriku Shinetsu','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0),
    new Voyage (4, 'Kanto', 6000, 
    ' la région de Kanto recèle également des villages de montagne rustiques et de sublimes îles subtropicales',
    'assets/Kanro.jpg','Kanto','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0),
    new Voyage (5, 'Tokai', 6000, 'la région du Tokai offre à la fois des destinations de renommée mondiale et des trésors méconnus',
    'assets/Tokai.jpg','Tokai','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0)
    ];
    getVoyage(){
      return this.Voyage;
    }
  constructor() { }
 
}
