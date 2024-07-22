import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: User

  constructor() {
    this.user = new User()
  }

  signUpSubmit(signUpForm: any) {
    // get data, metadata from form
    // make http request to the rest api
    console.log(signUpForm)
  }
}

