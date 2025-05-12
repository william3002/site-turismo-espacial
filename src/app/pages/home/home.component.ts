import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
