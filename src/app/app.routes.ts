import { Routes } from '@angular/router';
import { Medicament } from './medicament/medicament';
import { AddMedicament } from './add-medicament/add-medicament';
import { UpdateMedicament } from './update-medicament/update-medicament';

export const routes: Routes = [
    {path : "medicament", component: Medicament},
    {path : "add-medicament", component: AddMedicament},
    {path : "", redirectTo: "medicament", pathMatch: "full"},
    {path : "updateMedicament/:id", component: UpdateMedicament}
];
