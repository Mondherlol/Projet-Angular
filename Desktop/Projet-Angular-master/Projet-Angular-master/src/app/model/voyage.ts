export class Voyage {
    constructor(
     public id?:number,
     public libelle?:string,
     public prix?:number,
     public Description?:string,
     public Image?:string,
     public Duree?:string,
     public DateDebut?:Date,
     public DateFin?:Date,
     public Promo?:boolean,
     public PourcentagePromo?:number,
     public categorie?:string
    ){

    }
}
