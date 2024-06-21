import {Component, OnDestroy, OnInit} from '@angular/core';
import {DarkmodeService} from "../../services/darkmode.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  links:Array<any>=[
    { name :"Home", route :"/home"},
    { name :"About", route :"/about"},
    { name :"Projects", route :"/projects"},
    { name :"Blog", route :"/blog"},
    { name :"Resume", route :"/resume"}
  ];

  isMobileMenuOpen = false;
  isDarkMode = false;
  private themeSubscription!: Subscription;


  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.darkModeService.theme$.subscribe(theme => {
      this.isDarkMode = theme === this.darkModeService.getDarkModeClass();
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
