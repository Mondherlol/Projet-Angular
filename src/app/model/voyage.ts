export class Voyage {
    constructor(
     public    identifiant?:number,
     public libelle?:string,
     public prix?:number,
     public Description?:string,
     public  Image?:string,
     public  Alt?:string,
     public Duree?:string,
     public  DateDebut?:Date,
     public DateFin?:Date,
     public  Promo?:boolean,
     public  PourcentagePromo?:number
    ){

    }
}