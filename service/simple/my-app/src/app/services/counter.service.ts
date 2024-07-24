import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count: number

  constructor() {
    this.count = 0
  }

  increase() {
    this.count++
  }

}
