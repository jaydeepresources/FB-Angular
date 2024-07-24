import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent {

  constructor(public counterService: CounterService) {

  }

}
