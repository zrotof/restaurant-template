import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProduitComponent } from './components/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    GoogleMapsModule,
    NgbModule
  ],
  entryComponents: [
    ProduitComponent
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
