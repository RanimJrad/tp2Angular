import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[]
  constructor() {
    console.log("creation du service produit !");
    this.produits = [
      {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
      ];

   }
   listeProduit(): Produit[]{
    return this.produits;
   }

   ajouterProduit(produit : Produit){
    this.produits.push(produit);

   }
}
