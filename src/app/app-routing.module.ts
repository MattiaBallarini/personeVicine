import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmiciComponent } from './components/amici/amici.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ImpostazioniComponent } from './components/impostazioni/impostazioni.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NuovoUtenteComponent } from './components/nuovo-utente/nuovo-utente.component';
import { ProfiliComponent } from './components/profili/profili.component';

const routes: Routes = [
  { path: "", component: ProfiliComponent },
  { path: "nuovoutente", component: NuovoUtenteComponent },
  { path: "chisiamo", component: ChisiamoComponent},
  { path: "contatti", component: ContattiComponent},
  { path: "impostazioni", component: ImpostazioniComponent},
  { path: "amici", component: AmiciComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
