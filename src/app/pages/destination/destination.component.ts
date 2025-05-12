import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { NavComponent } from "../../components/nav/nav.component";
import { Destination, Root } from '../../models/root';
import * as data from '../../data.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destinos: Root = data
  destinoSelecionado!: Destination

  ngOnInit(){
    this.destinoSelecionado = this.destinos.destinations[0]
  }

  selecionarDestino(nome:string){
    const destino = this.destinos.destinations.find(d => d.name === nome)!
    if(this.destinoSelecionado){
      this.destinoSelecionado = destino
    }
  }
}
