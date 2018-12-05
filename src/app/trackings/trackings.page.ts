import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-trackings',
  templateUrl: './trackings.page.html',
  styleUrls: ['./trackings.page.scss']
})
export class TrackingsPage implements OnInit {
  id: string;
  tracking: Tracking;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    public actionSheetController: ActionSheetController
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.httpClient
      .get<Tracking>(
        'https://demoirp.azurewebsites.net/api/manahook/getcartbyid/' + this.id
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.tracking = item;
          console.log(this.tracking);
        },
        error => {
          // ERROR: Do something
          console.log('error call api');
        }
      );
  }

  ngOnInit() {}

  async rateProduct() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Rating',
      buttons: [
        {
          text: 'Awesome'
        },
        {
          text: 'I love it'
        },
        {
          text: 'Pretty good'
        },
        {
          text: 'Not so bad'
        },
        {
          text: 'I do not like it'
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close'
        }
      ]
    });
    actionSheet.present();
  }
}
