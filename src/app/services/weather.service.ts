import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RightNow } from './rightnow.model';
import { Forecast } from './forecast.model';
import { Weather } from './weather.model';

@Injectable()
export class WeatherService{
	data: Weather;
	constructor(private http: Http) {}
	
	getWeather(queryUrl: string): Observable<Weather> {
		return this.http.get(queryUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
	
		this.data = res.json(); // if this fails then handleError will be invoked
		console.log('WeatherService::extractData() data: ', this.data);
		
		let rightnow: RightNow = new RightNow(
			this.data.rightnow.city,
			this.data.rightnow.temp,
			this.data.rightnow.weatherIconUrl,
			this.data.rightnow.weatherDescription
		);
		
		let forecasts: Forecast[] = this.data.forecasts
			.map(item => {
				return new Forecast(
					item.dayOfWeek,
					item.weatherIconUrl,
					item.weatherDescription,
					item.lowTemp,
					item.highTemp
				);
			});
		
		return Observable.of(new Weather(
				rightnow, 
				forecasts
				));

	}

	/*
	* Handle error extracting data from the response body
	*/
	private handleError (error: Response | any) {
		let errStatus: number;
		if (error instanceof Response) {
			errStatus = error.status;
		} 
		else {
			errStatus = 500; // assumes server error
		}
		return Observable.throw(errStatus);
	}
}