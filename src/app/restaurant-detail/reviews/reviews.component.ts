import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.reviews = this.restaurantsService.restaurantsReviews(id);
  }

}
