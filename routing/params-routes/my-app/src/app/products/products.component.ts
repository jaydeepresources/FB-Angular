import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: string[]

  constructor() {
    this.products = ['mobiles', 'laptops', 'televisions', 'refridgerators', 'smart_home']
  }

}
