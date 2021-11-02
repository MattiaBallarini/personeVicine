import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuovoUtente } from 'src/app/models/utenti';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {

  nomeForm: string = "";
  lavoroForm: string = "";

  constructor(
    public utentiService : UtentiService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  creaUtente(){
    this.utentiService.creaNuovoUtente(this.nomeForm, this.lavoroForm).subscribe(
      (risultato : NuovoUtente) => {
        this.router.navigate(["/"], {state: {utente : risultato}});
      }
    )
  }

}
