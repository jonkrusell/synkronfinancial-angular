import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
  }

  getCurrentRoute() {
    console.log(this.global.currentRoute);
  }

}
