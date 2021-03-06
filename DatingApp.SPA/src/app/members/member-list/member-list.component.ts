import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  constructor(
    private _userService: UserService,
    private _alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   this.route.data.subscribe(data => {
     this.users = data['user'];
   });
  }

  // loadUsers() {
  //   this._userService.getUsers().subscribe(
  //     (users: User[]) => {
  //       this.users = users;
  //     },
  //     error => {
  //       this._alertify.error(error);
  //     }
  //   );
  // }
}
