import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-qr-code',
  templateUrl: './product-qr-code.page.html',
  styleUrls: ['./product-qr-code.page.scss']
})
export class ProductQrCodePage implements OnInit {
  reviewerId: string;
  productId: string;
  qrData: any;

  constructor(
    private navController: NavController,
    private toastController: ToastController,
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewerId = this.route.snapshot.paramMap.get('reviewerId');
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.httpClient
      .get(
        'https://demoirp.azurewebsites.net/api/ManaHook/RequestReviewerQR/' +
          this.reviewerId +
          '/' +
          this.productId
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.qrData = item;
          console.log(this.qrData);
        },
        error => {
          // ERROR: Do something
          console.log('error call api');
        }
      );
  }

  async saveQR() {
    const toast = await this.toastController.create({
      message: 'Your QR code have been saved.',
      duration: 3000
    });
    toast.present().then(() => {
      this.navController.goBack();
    });
  }

  close() {
    this.navController.goBack();
  }
}
