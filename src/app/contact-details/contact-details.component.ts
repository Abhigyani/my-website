import { Component, OnInit } from '@angular/core';

import { profiles } from './contact-profiles';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  public profiles: any;

  constructor() { }

  ngOnInit() {
    this.profiles = profiles;
  }

  gotToLink(url: string): void {
    window.open(url, '_blank');
  }

}
