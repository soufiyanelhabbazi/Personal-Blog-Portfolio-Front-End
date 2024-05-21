import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  private darkModeClass = 'dark';
  private themeKey = 'theme';
  private themeSubject = new BehaviorSubject<string | null>(null);
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
  }
  getDarkModeClass() {
    return this.darkModeClass;
  }
  loadTheme(): void {
    const storedTheme = localStorage.getItem(this.themeKey);

    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
      this.themeSubject.next(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add(this.darkModeClass);
        this.themeSubject.next(this.darkModeClass);
      } else {
        this.themeSubject.next(null);
      }
    }
  }

  toggleDarkMode(): void {
    const isDark = document.documentElement.classList.toggle(this.darkModeClass);
    if (isDark) {
      localStorage.setItem(this.themeKey, this.darkModeClass);
      this.themeSubject.next(this.darkModeClass);
    } else {
      localStorage.removeItem(this.themeKey);
      this.themeSubject.next(null);
    }
  }
}
