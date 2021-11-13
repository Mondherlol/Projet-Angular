import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  Voyages: Voyage[]=[];
 
  constructor(private voyageService:VoyageService ) { }
  
  ngOnInit(): void {
     this.Voyages=this.voyageService.getVoyage();
  }

}
