import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-search.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu()
  {
      this.isMenuOpen = !this.isMenuOpen;
  }

}
