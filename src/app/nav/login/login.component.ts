import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public global: GlobalService, private sharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.sharedService.authenticateMember(this.email, this.password).subscribe(member => {
      if (member) {
        this.global.member = member;
      }
    });
  }

}
