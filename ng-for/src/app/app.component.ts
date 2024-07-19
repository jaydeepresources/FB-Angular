import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  names: string[]

  constructor() {
    this.names = ['Yogita', 'Purva', 'Vivek', 'Shubham', 'Renuka', 'Sanika']
  }

}

