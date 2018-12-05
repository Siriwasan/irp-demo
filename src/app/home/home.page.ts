import { Component } from '@angular/core';

import { Firebase } from '@ionic-native/firebase/ngx';

import * as firebase from 'firebase';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  orders: Order[] = [];

  constructor(private firebaseCordoba: Firebase, private router: Router) {
    this.firebaseCordoba
      .getToken()
      .then(token => {
        console.log(token);

        this.updateToken(token, firebase.auth().currentUser.uid);
      })
      .catch(err => {
        console.log(err);
      });

    this.getOrders();
  }

  updateToken(token: string, uid: string) {
    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .set(
        {
          token: token,
          tokenUpdate: firebase.firestore.FieldValue.serverTimestamp()
        },
        {
          merge: true
        }
      )
      .then(() => {
        console.log('token saved to cloud firestore');
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOrders() {
    const query = firebase
      .firestore()
      .collection('orders')
      .orderBy('CheckOutedDateTime', 'asc');

    query.onSnapshot(snapshot => {
      const changedDocs = snapshot.docChanges();

      changedDocs.forEach(change => {
        if (change.type === 'added') {
          this.orders.unshift(change.doc.data() as Order);
        }

        if (change.type === 'modified') {
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].Id === change.doc.data().Id) {
              this.orders[i] = change.doc.data() as Order;
            }
          }
        }

        if (change.type === 'removed') {
          this.orders.splice(this.orders.indexOf(change.doc.data().Id));
        }

        console.log('order ' + change.type);
      });
    });
  }

  fetchOrders(query) {
    this.orders = [];

    query
      .get()
      .then(docs => {
        docs.forEach(doc => {
          this.orders.push(doc.data() as Order);
        });

        console.log(this.orders);
      })
      .catch(err => {
        console.log(err);
      });
  }

  ago(time) {
    const difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  gotoOrder(order: Order) {
    this.router.navigate(['orders', { id: order.Id }]);
  }

  convertDate(date: Date) {
    return moment(date).format('LLL');
  }
}
