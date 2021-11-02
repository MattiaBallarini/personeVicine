import { Component, OnInit } from '@angular/core';
import { ImpostazioniService } from 'src/app/services/impostazioni.service';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.component.html',
  styleUrls: ['./impostazioni.component.css']
})
export class ImpostazioniComponent implements OnInit {

  colore: string = "#0d6efd";

  constructor(
    public impostazioni : ImpostazioniService
  ) { }

  ngOnInit(): void {
  }


cambiaColore(){
  this.impostazioni.setImpostazioni(this.colore);
}



}
