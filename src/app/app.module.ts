import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfiliComponent } from './components/profili/profili.component';
import { NuovoUtenteComponent } from './components/nuovo-utente/nuovo-utente.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ImpostazioniComponent } from './components/impostazioni/impostazioni.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardUtenteComponent } from './components/card-utente/card-utente.component';
import { FormsModule } from '@angular/forms';
import { UtentiService } from './services/utenti.service';
import { ImpostazioniService } from './services/impostazioni.service';
import { AmiciComponent } from './components/amici/amici.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfiliComponent,
    NuovoUtenteComponent,
    ChisiamoComponent,
    ContattiComponent,
    ImpostazioniComponent,
    SidebarComponent,
    NotFoundComponent,
    CardUtenteComponent,
    AmiciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UtentiService,
    ImpostazioniService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
