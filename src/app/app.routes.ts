import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduit } from './add-produit/add-produit';

export const routes: Routes = [
    { path: "produits", component: Produits },
    { path: "add-produit", component: AddProduit },
    {path: "", redirectTo: "produits", pathMatch: "full"}

];