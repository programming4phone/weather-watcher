import { Component } from '@angular/core';
import { Weather } from '../services/weather.model';
@Component({
	selector: 'app-home-component',
	templateUrl: './home-component.component.html',
	styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

	results: Weather;
  
	updateResults(results: Weather): void {
		this.results = results;
		console.log("HomeComponentComponent results:", this.results);
	}

}
