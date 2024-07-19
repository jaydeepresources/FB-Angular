import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  flag: boolean

  hide() {
    this.flag = false
  }

  show() {
    this.flag = true
  }

  constructor() {
    this.flag = true
  }

}

