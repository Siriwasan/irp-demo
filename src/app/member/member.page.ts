import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss']
})
export class MemberPage implements OnInit {
  members: MemberDetail;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<MemberDetail>(
        'https://workflowtemp-rdev.azurewebsites.net/api/Third/GetMembers/irp-001'
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.members = item;
          console.log(this.members);
        },
        error => {
          // ERROR: Do something
          console.log(error);
        }
      );
  }

  convertDate(date: Date) {
    return moment(date).format('LL');
  }
}
