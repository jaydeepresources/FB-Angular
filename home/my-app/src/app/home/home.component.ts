import { Component } from '@angular/core';
import { RestaurantCrudService } from '../services/restaurant-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public restaurantCrudService: RestaurantCrudService) {

  }

  ngOnInit() {
    this.restaurantCrudService.getRestaurants()
  }

}
