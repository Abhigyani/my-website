import { Component, OnInit } from '@angular/core';

import { navbarContent } from './navbar.content';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  content = navbarContent;

  constructor() { }

  ngOnInit() {
  }

}
