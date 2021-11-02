import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImpostazioniService{

  //chiave per l'oggetto di impostazioni del sessionStorage
  private IMP_KEY = "imp";

  
  impostazioni = {
    "coloreTema" : "#0d6efd",
    "font" : "Roboto"
  }


  constructor() {
  }

  setImpostazioni(colore: string){
    this.impostazioni.coloreTema = colore;
  }


}
