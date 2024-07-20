import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  names: string[]
  newName: string
  flag: boolean

  deleteName(i: number) {
    this.names.splice(i, 1)
  }

  addName() {
    this.names.push(this.newName.trim())
    this.newName = ''
  }

  constructor() {
    this.newName = ''
    this.names = ['Yogita', 'Purva', 'Vivek', 'Shubham', 'Renuka', 'Sanika']
    this.flag = true
  }

}

