import { Component } from '@angular/core';
import { ImpostazioniService } from './services/impostazioni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    public impostazioni : ImpostazioniService
  ){}


  


}
