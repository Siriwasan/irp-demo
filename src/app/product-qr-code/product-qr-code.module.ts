import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductQrCodePage } from './product-qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: ProductQrCodePage
  },
  {
    path: ':reviewerId/:productId',
    component: ProductQrCodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductQrCodePage]
})
export class ProductQrCodePageModule {}
