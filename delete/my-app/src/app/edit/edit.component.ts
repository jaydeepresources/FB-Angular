import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantCrudService } from '../services/restaurant-crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  restaurant: Restaurant

  constructor(public restaurantCrudService: RestaurantCrudService) {
    this.restaurant = new Restaurant()
  }

  editRestaurantSubmit(editRestaurantForm: any) {
    this.restaurantCrudService.addRestaurant(this.restaurant)
    editRestaurantForm.form.markAsPristine()
  }

  selectRestaurantId() {
    for (let i = 0; i < this.restaurantCrudService.restaurants.length; i++)
      if (this.restaurantCrudService.restaurants[i].restaurantId == this.restaurant.restaurantId)
        Object.assign(this.restaurant, this.restaurantCrudService.restaurants[i])
  }


}