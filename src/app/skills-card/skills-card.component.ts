import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {

  public showHeader: boolean;

  constructor() { }

  ngOnInit() {
    this.showHeader = false;
  }

  loadHeader(): void {
    this.showHeader = !this.showHeader;
  }

}
