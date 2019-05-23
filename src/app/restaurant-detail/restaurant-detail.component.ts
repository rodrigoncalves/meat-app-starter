import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantModel } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: RestaurantModel;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.restaurantsService.restaurantById(id)
      .subscribe(res => this.restaurant = res);
  }

}
