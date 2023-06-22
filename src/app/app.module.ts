import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalGuaranteComponent } from './legal-guarante/legal-guarante.component';
import { ServicesRuleComponent } from './services-rule/services-rule.component';
import { UsersRightComponent } from './users-right/users-right.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LegalGuaranteComponent,
    ServicesRuleComponent,
    UsersRightComponent,
    BranchManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
