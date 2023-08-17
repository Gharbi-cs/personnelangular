import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterPersonnelComponent } from './adminpanel/ajouter-personnel/ajouter-personnel.component';
import { AllAdminPannelComponent } from './adminpanel/all-admin-pannel/all-admin-pannel.component';
import { ConsulterPersonnelComponent } from './adminpanel/consulter-personnel/consulter-personnel.component';
import { ModifierPersonnelComponent } from './adminpanel/modifier-personnel/modifier-personnel.component';
import { NavbarPanelComponent } from './adminpanel/navbar-panel/navbar-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    AjouterPersonnelComponent,
    AllAdminPannelComponent,
    ConsulterPersonnelComponent,
    ModifierPersonnelComponent,
    NavbarPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
