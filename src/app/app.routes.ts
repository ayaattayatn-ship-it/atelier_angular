import { Routes } from '@angular/router';
import { Medicament } from './medicament/medicament';
import { AddMedicament } from './add-medicament/add-medicament';
import { UpdateMedicament } from './update-medicament/update-medicament';
import { RechercheParForme } from './recherche-par-forme/recherche-par-forme';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { medicamentGuard } from './guard/medicament-guard';
import { ListeFormes } from './liste-formes/liste-formes';

export const routes: Routes = [
    {path : "medicament", component: Medicament},
    {path : "add-medicament", component: AddMedicament, canActivate:[medicamentGuard]},
    {path : "", redirectTo: "medicament", pathMatch: "full"},
    {path : "updateMedicament/:id", component: UpdateMedicament},
    {path: "rechercheParForme", component : RechercheParForme},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: 'login', component: Login},
    {path: 'app-forbidden', component: Forbidden},
    {path: "listeFormes", component : ListeFormes},

];
