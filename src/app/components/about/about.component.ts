import {Component, OnInit} from '@angular/core';
import {Socials} from "../../utils/socials";
import {Subscription} from "rxjs";
import {DarkmodeService} from "../../services/darkmode.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  socials = new Socials().getSocials();
  isDarkMode = false;
  private themeSubscription!: Subscription;


  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.darkModeService.theme$.subscribe(theme => {
      this.isDarkMode = theme === this.darkModeService.getDarkModeClass();
    });
  }
}
