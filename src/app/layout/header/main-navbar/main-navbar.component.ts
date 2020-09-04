import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  navbarCollapsed: Boolean = true;

  onToggleNavbarCollapsed(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
