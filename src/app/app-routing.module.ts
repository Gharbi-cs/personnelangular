import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAdminPannelComponent } from './adminpanel/all-admin-pannel/all-admin-pannel.component';
import { AjouterPersonnelComponent } from './adminpanel/ajouter-personnel/ajouter-personnel.component';
import { ConsulterPersonnelComponent } from './adminpanel/consulter-personnel/consulter-personnel.component';
import { ModifierPersonnelComponent } from './adminpanel/modifier-personnel/modifier-personnel.component';

const routes: Routes = [
  {path:"admin", component:AllAdminPannelComponent,children:
  [
    {path:"ajouterpersonnel",component:AjouterPersonnelComponent},
    {path:"consulterpersonnel",component:ConsulterPersonnelComponent},
    {path:"modifierpersonnel/:id",component:ModifierPersonnelComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
