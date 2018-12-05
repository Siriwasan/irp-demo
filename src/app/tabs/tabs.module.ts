import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { StorePageModule } from '../store/store.module';
import { MemberPageModule } from '../member/member.module';
import { ProfilePageModule } from '../profile/profile.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MemberPageModule,
    ProfilePageModule,
    StorePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
