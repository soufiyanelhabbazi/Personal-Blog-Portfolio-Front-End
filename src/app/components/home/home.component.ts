import { Component } from '@angular/core';
import {Socials} from "../../utils/socials";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  socials = new Socials().getSocials();
}
