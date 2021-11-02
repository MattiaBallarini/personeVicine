import { Component, OnInit, Input } from '@angular/core';
import { Utente } from 'src/app/models/utenti';
import { ImpostazioniService } from 'src/app/services/impostazioni.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-card-utente',
  templateUrl: './card-utente.component.html',
  styleUrls: ['./card-utente.component.css']
})
export class CardUtenteComponent implements OnInit {

  @Input() utente?: Utente;
  // @Input() isLoading: boolean = true;

  constructor(
    public impostazioni: ImpostazioniService,
    public utentiService: UtentiService
  ) { }

  ngOnInit(): void {
  }

}
