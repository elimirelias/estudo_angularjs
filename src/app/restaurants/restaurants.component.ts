import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurant/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  // Injeção de dependência
  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
