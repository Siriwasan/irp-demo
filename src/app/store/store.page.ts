import { Component, OnInit } from '@angular/core';

import { Products } from 'src/model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage implements OnInit {
  products = Products;

  constructor() {}

  ngOnInit() {
    console.log(Products);
  }
}
