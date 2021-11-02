import { Component, OnInit } from '@angular/core';
import { ImpostazioniService } from 'src/app/services/impostazioni.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public impostazioni: ImpostazioniService,
    public utentiService : UtentiService
  ) { }

  ngOnInit(): void {
  }

}
