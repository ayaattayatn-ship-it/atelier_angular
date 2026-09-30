import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
    providedIn: 'root'
})
export class ProduitService {
    produits: Produit[]; //un tableau de Produit
    produit! : Produit; //un objet de type Produit
    constructor() {
        console.log("creation du service Produit");
        this.produits = [
            {idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011")},
            {idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010")},
            {idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020")}
        ];
    }
    listeProduits(): Produit[] {
        return this.produits;
    }
    ajouterProduit(prod: Produit) {
        this.produits.push(prod);
    }
    supprimerProduit(prod: Produit) {
        //supprimer le produit prod du tableau produits
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) {
            this.produits.splice(index, 1);
        }
        //ou bien
        /* this.produits.forEach((cur, index) => {
            if(prod.idProduit === cur.idProduit) {
                this.produits.splice(index, 1);
            }
        }); */
    }
    consulterProduit(id: number): Produit {
        this.produit = this.produits.find(p => p.idProduit == id)!;
        return this.produit;
    }
    updateProduit(prod: Produit) {
        //chercher le produit prod du tableau produits
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) {
            this.produits.splice(index, 1); //supprimer l'ancien éléments
            this.produits.splice(index, 0, prod); // insérer le nouvel élément
        }
    }

   
}