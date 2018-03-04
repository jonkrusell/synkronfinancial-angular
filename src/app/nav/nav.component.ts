import { Component, OnInit } from '@angular/core';


import { GlobalService } from '../services/global.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public global: GlobalService, private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.global.currentRoute = val.url;
      }
  });
  }

  ngOnInit() {
  }

}
