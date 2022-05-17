import { Component } from '@angular/core';
import { wines } from "../data";

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['../app.component.css']
})
export class DrinkAgainComponent {
  wines = wines
}
