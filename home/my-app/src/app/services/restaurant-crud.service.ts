import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCrudService {

  restaurants: Restaurant[]

  constructor(public http: HttpClient) {
    this.restaurants = []
  }

  getRestaurants() {
    this.http.get<Restaurant[]>('http://localhost:8080/restaurants').subscribe(data => this.restaurants = data)
  }

}
