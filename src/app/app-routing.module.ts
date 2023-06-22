import { Component, NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LegalGuaranteComponent } from './legal-guarante/legal-guarante.component';
import { ServicesRuleComponent } from './services-rule/services-rule.component';
import { UsersRightComponent } from './users-right/users-right.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'garantia-legal',
    component: LegalGuaranteComponent
  },
  {
    path: 'encargado-sucursal',
    component: BranchManagerComponent
  },
  {
    path: 'reglamento-servicio',
    component: ServicesRuleComponent
  },
  {
    path: 'derechos-usuario',
    component: UsersRightComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
