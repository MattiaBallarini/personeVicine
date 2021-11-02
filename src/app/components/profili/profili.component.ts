import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utenti} from 'src/app/models/utenti';
import { ImpostazioniService } from 'src/app/services/impostazioni.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.css']
})
export class ProfiliComponent implements OnInit {

  paginaScelta: number = 1; //di default vioene scelta la pagina 1
  perPagina: number = 6;  //di default vengono scelti 6 utenti per pagina
  paginaAttiva: number = 1;
  utentiTotali: number[] = [];
  pagine: number[] = [];
  listaUtenti?: Utenti;
  pagineTotali: number = 2;

 


  risultato?: any = {};

  //variabile per la visualizzazione dei loading
  isLoading: boolean = true;
 


  constructor(
    public utentiService : UtentiService,
    private router: Router,
    public impostazioni: ImpostazioniService
  ) {
      this.risultato = this.router.getCurrentNavigation()?.extras.state;
      if(this.risultato != undefined){
        alert(`Utente ${this.risultato.utente.name} con id ${this.risultato.utente.id} è satato creato`);
      }
    }

  ngOnInit(): void {
    this.isLoading = true; //visualizza caricatore

    //chiamata per fare il download di tutti gli utenti. Previsto un delay preimpostato di 1 secondo
    this.utentiService.downloadPersone(this.paginaScelta, this.perPagina).subscribe(
      (lista : Utenti) => {
        this.listaUtenti = lista;
        this.perPagina = lista.per_page;
        this.pagineTotali = lista.total_pages;
        this.utentiTotali = this.utentiService.numeroAarray(lista.total); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.pagine = this.utentiService.numeroAarray(lista.total_pages); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.isLoading = false;
      }
    )
  }

  utentiPerPagina(numero: number){
    this.isLoading = true; //visualizza caricatore

    this.utentiService.downloadPersone(this.paginaScelta, numero).subscribe(
      (lista : Utenti) => {
        this.listaUtenti = lista;
        this.perPagina = lista.per_page;
        this.pagineTotali = lista.total_pages;
        this.utentiTotali = this.utentiService.numeroAarray(lista.total); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.pagine = this.utentiService.numeroAarray(lista.total_pages); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.isLoading = false;
      }
    )
  }

  //metodo per la paginazione degli utenti
  cambiaPagina(pagina: number){
    this.paginaAttiva = pagina;
    this.isLoading = true; //visualizza caricatore
    
    this.utentiService.downloadPersone(pagina, this.perPagina).subscribe(
      (lista : Utenti) => {
        this.listaUtenti = lista;
        this.pagineTotali = lista.total_pages;
        this.utentiTotali = this.utentiService.numeroAarray(lista.total); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.pagine = this.utentiService.numeroAarray(lista.total_pages); //devo anche trasformare in array perché altrimenti nell'HTML non posso fare *ngFor
        this.isLoading = false;
      }
    )
  }

  //metodo per i pulsanti precedente e successivo della paginazione
  scorri(scorrimento: number){
    if(scorrimento == 0){ //è stato cliccato precedente
      if(this.paginaAttiva == 1){ //la funzione non fa nulla se si era sulla prima pagina
        return;
      }
      this.paginaAttiva--;
    }else{                //è stato cliccato successiva
      if(this.paginaAttiva == this.pagineTotali){ //la funzione non fa nulla se si era sull'ultima pagina
        return;
      }
      this.paginaAttiva++;
    }
 
    this.cambiaPagina(this.paginaAttiva)
  }




}
