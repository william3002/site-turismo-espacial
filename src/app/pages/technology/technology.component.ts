import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Root, Technology } from '../../models/root';
import * as data from '../../data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  space: Root = data;
  selecionado?: Technology

  ngOnInit() {
    this.selecionado = this.space.technology[0]
  }

  itemSelecionado(name: string){
    this.selecionado = this.space.technology.find(i => i.name === name)
  }
}
