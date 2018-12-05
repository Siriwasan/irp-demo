import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-results',
  templateUrl: './review-results.page.html',
  styleUrls: ['./review-results.page.scss']
})
export class ReviewResultsPage implements OnInit {
  reviewResult: ReviewResult;
  user: string;
  product: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.user = this.route.snapshot.paramMap.get('user');
    this.product = this.route.snapshot.paramMap.get('product');
    console.log(this.user + ' ' + this.product);

    this.httpClient
      .get<ReviewResult>(
        'https://demoirp.azurewebsites.net/api/ManaHook/GetNotifyRetailer/' +
          this.user +
          '/' +
          this.product
      )
      .subscribe(
        item => {
          // SUCCESS: Do something
          this.reviewResult = item;
          console.log(item);
        },
        error => {
          // ERROR: Do something
          console.log(error);
        }
      );
  }

  ngOnInit() {}
}
