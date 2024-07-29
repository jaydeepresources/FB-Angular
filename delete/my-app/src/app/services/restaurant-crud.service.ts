import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCrudService {

  restaurants: Restaurant[]

  restaurantAddedSuccess: boolean
  restaurantDeletedSuccess: boolean

  constructor(public http: HttpClient) {
    this.restaurants = []
    this.restaurantAddedSuccess = false
    this.restaurantDeletedSuccess = false
  }

  getRestaurants() {
    this.http.get<Restaurant[]>('http://localhost:8080/restaurants').subscribe(data => this.restaurants = data, err => console.log(err))
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurantAddedSuccess = false
    this.http.post<Restaurant>('http://localhost:8080/restaurants', restaurant).subscribe(data => {
      this.restaurantAddedSuccess = true
    }, err => console.log(err))
  }

  deleteRestaurant(restaurantId: number) {
    this.restaurantDeletedSuccess = false
    this.http.delete<any>('http://localhost:8080/restaurants/' + restaurantId).subscribe(data => {
      if (data.status)
        this.restaurantDeletedSuccess = true
    })
  }

}
