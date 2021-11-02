import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utenti';
import { ImpostazioniService } from 'src/app/services/impostazioni.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-amici',
  templateUrl: './amici.component.html',
  styleUrls: ['./amici.component.css']
})
export class AmiciComponent implements OnInit {

  utente?: Utente;

  constructor(
    public utentiService : UtentiService,
    public impostazioni : ImpostazioniService
  ) { }

  ngOnInit(): void {
  }



}
