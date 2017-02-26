import { Component } from '@angular/core';
import { Forecast } from '../services/forecast.model';
@Component({
	selector: 'app-forecast',
	inputs: ['forecast'],
	templateUrl: './forecast.component.html',
	styleUrls: ['./forecast.component.css']
})
export class ForecastComponent  {

	forecast: Forecast;
	
	constructor() { }

}
