import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NuovoUtente, Utente, Utenti } from '../models/utenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  private KEY_AMICI = "amici";

  amici: Utente[] = []; //l'array di amici salvati nel session storage


  constructor(
    private http: HttpClient
  ) {
    if(sessionStorage.getItem(this.KEY_AMICI)){ // se è presente qualche dato nel session storage mettilo nell'array amici
      this.amici = JSON.parse(sessionStorage.getItem(this.KEY_AMICI)!) as Utente[]
    }
    else {
      this.amici = []
    }
  }


//vera e propria chiamata con download di tutti i dati e un delay predefinito di 2 secondi
downloadPersone(paginaScelta: number, perPagina: number) : Observable<Utenti>{
  return this.http.get<Utenti>(
    `${environment.endPoint}/users`,
    {
      params: {
        delay: 1,
        page: paginaScelta,
        per_page: perPagina
      }
    })
}

//converte un numero in array, serve per gli *ngFor. Questo perché non riescono a ciclare su un numero, ma su un array
numeroAarray(numero: number) : number[] {
  let arrayNumeri: number[] = [];
  for(let i=0; i<numero; i++){
    arrayNumeri.push(i+1);
  }
  return arrayNumeri;
}


creaNuovoUtente(nome: string, lavoro: string): Observable<NuovoUtente>{
  return this.http.post<NuovoUtente>(
    `${environment.endPoint}/users`,
    {
      name : nome,
      job : lavoro
    }
  )
}


aggiungiAmico(utente: Utente){
  //verifico che non sia già presente l'amico
  // let presente = this.amici.find(
  //   (i : Utente) => i.id = utente.id
  // )
  // if(!presente){ //se non è presente allora faccio il push()
    this.amici.push(utente);
    sessionStorage.setItem(this.KEY_AMICI, JSON.stringify(this.amici));
  // } 
}

//numero amici nell'array
getCount() : number {
  let tot = 0
  for(let i = 0; i<this.amici.length; i++){
    
  }
  return tot
}


}
