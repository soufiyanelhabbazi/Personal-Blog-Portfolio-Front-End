import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DarkmodeService} from "../services/darkmode.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{

  isMobileMenuOpen = false;
  isDarkMode = false;
  private themeSubscription!: Subscription;


  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.darkModeService.theme$.subscribe(theme => {
      this.isDarkMode = theme === this.darkModeService.getDarkModeClass();
    });
  }

}
