import {Component, OnInit} from '@angular/core';
import {DarkmodeService} from "./services/darkmode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Soufiyan El Habbazi';
  isLoading = true;
  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit() {
    setTimeout( () => {
      this.isLoading = false;
    }, 3000)
  }
}
