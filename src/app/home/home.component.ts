import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { SharedService } from '../services/shared.service';
import { Contract } from '../models/contract.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contract: Contract;

  constructor(private globals: GlobalService, private sharedService: SharedService) { }

  ngOnInit() {
  }

  getContract() {
    this.sharedService.authenticateMember("jonkrusell@rocketmail.com", "password").subscribe(member => {
      console.log(member);
      this.globals.member = member;
    });
    this.sharedService.getContractByID("c8adf9dd-dfee-454f-9c3a-1128c3f36b31").subscribe(contract => {
      this.contract = contract;
    });
  }

}
