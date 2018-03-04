import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Member } from '../../models/member.model';
import { GlobalService } from '../../services/global.service';
import { SharedService } from '../../services/shared.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public passwordConfirmation: string;

  constructor(public global: GlobalService, private sharedService: SharedService, private toastr: ToastsManager, private vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

  signUp() {
    if (this.password === this.passwordConfirmation) {
      var member = new Member();
      member.first_name = this.firstName;
      member.last_name = this.lastName;
      member.email = this.email;
      member.password = this.password;
      this.sharedService.createMember(member).subscribe(member => {
        if (member) {
          this.global.member = member;
        } else {
          this.toastr.error("Sign up fail", "Oops!");
        }
      });
    }
    else {
      this.toastr.error("Your passwords don't match", "Oops!");
    }
  }

}
