import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewResultsPage } from './review-results.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewResultsPage
  },
  {
    path: ':user/:product',
    component: ReviewResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewResultsPage]
})
export class ReviewResultsPageModule {}
