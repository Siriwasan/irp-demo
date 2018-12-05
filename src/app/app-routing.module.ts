import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsPageModule'
  },
  {
    path: 'trackings',
    loadChildren: './trackings/trackings.module#TrackingsPageModule'
  },
  {
    path: 'review-results',
    loadChildren:
      './review-results/review-results.module#ReviewResultsPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  {
    path: 'product-qr-code',
    loadChildren:
      './product-qr-code/product-qr-code.module#ProductQrCodePageModule'
  },
  { path: 'member', loadChildren: './member/member.module#MemberPageModule' },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
