import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantCrudService } from '../services/restaurant-crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  restaurant: Restaurant

  constructor(public restaurantCrudService: RestaurantCrudService) {
    this.restaurant = new Restaurant()
  }

  addRestaurantSubmit(addRestaurantForm: any) {
    this.restaurantCrudService.addRestaurant(this.restaurant)
    addRestaurantForm.form.markAsPristine()
  }

}
