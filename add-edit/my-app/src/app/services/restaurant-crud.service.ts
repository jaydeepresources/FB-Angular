import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCrudService {

  restaurants: Restaurant[]

  restaurantAddedSuccess: boolean
  restaurantAddedError: boolean

  constructor(public http: HttpClient) {
    this.restaurants = []
    this.restaurantAddedSuccess = false
    this.restaurantAddedError = false
  }

  getRestaurants() {
    this.http.get<Restaurant[]>('http://localhost:8080/restaurants').subscribe(data => this.restaurants = data)
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurantAddedSuccess = false
    this.http.post<Restaurant>('http://localhost:8080/restaurants', restaurant).subscribe(data => {
      this.restaurantAddedSuccess = true
    })
  }

}
