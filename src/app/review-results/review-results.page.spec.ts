import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResultsPage } from './review-results.page';

describe('ReviewResultsPage', () => {
  let component: ReviewResultsPage;
  let fixture: ComponentFixture<ReviewResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
