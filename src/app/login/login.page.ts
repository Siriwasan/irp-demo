import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router, public toastCtrl: ToastController) {}

  ngOnInit() {}

  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(async user => {
        console.log(user);
        console.log('login success');

        // const toast = await this.toastCtrl.create({
        //   message: 'Welcome ' + user.user.displayName,
        //   duration: 3000
        // });
        // toast.present();

        this.router.navigate(['']);
      })
      .catch(async err => {
        console.log(err);

        const toast = await this.toastCtrl.create({
          message: err.message,
          duration: 3000
        });
        toast.present();
      });
  }
}
