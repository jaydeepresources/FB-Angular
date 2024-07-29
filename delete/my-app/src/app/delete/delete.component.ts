import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantCrudService } from '../services/restaurant-crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  restaurant: Restaurant

  constructor(public restaurantCrudService: RestaurantCrudService) {
    this.restaurant = new Restaurant()
  }

  deleteRestaurantSubmit(deleteRestaurantForm: any) {
    this.restaurantCrudService.deleteRestaurant(this.restaurant.restaurantId)
  }

}