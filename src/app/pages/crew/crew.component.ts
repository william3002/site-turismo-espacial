import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { Root, Crew } from '../../models/root';
import * as data from '../../data.json'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
tripulacao: Crew[] = (data as Root).crew;

  indiceAtual = 0;

  get membroSelecionado(): Crew {
    return this.tripulacao[this.indiceAtual];
  }

  selecionarMembro(index: number) {
    this.indiceAtual = index;
  }
}
  

