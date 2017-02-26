import { Component } from '@angular/core';
import { Forecast } from '../services/forecast.model';

@Component({
	selector: 'app-forecast-list',
	inputs: ['forecasts'],
	templateUrl: './forecast-list.component.html',
	styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent {
	forecasts: Forecast[];
	
	constructor() { }
}
