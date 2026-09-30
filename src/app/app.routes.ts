import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits';
import { AddProduit } from './add-produit/add-produit';
import { UpdateProduit } from './update-produit/update-produit';

export const routes: Routes = [
    { path: 'produits', component: ProduitsComponent },
    { path: 'add-produit', component: AddProduit },
    { path: '', redirectTo: 'produits', pathMatch: 'full' },
    {path: "updateProduit/:id", component: UpdateProduit}
];