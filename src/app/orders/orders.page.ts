import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {
  id: string;
  order: Order;
  orderUID: string;

  constructor(
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // const docRef = firebase
    //   .firestore()
    //   .collection('orders')
    //   .where('Id', '==', this.id);

    firebase
      .firestore()
      .collection('orders')
      .where('Id', '==', this.id)
      .get()
      .then(data => {
        this.order = data.docs[0].data() as Order;
        this.orderUID = data.docs[0].id;
        console.log(this.orderUID);

        firebase
          .firestore()
          .collection('orders')
          .doc(this.orderUID)
          .update({ RecordStatus: 'Read' });
      })
      .catch(err => {
        console.log(err);
      });

    // const updateData = {};
    // updateData['RecordStatus'] = 'Read';
  }

  async shippingStatus() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Status',
      buttons: [
        {
          text: 'รอจัดส่ง'
        },
        {
          text: 'อยู่ในระหว่างการส่ง'
        },
        {
          text: 'ส่งสินค้าแล้ว'
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
