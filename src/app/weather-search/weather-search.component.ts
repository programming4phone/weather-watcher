import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Weather } from '../services/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
	selector: 'app-weather-search',
	outputs: ['results'],
	templateUrl: './weather-search.component.html',
	styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {

	static BASE_URL: string = 'https://weather-watcher-collector-0100.herokuapp.com/weather/';
	
	weatherSearchFormGroup: FormGroup;
	loading: boolean;
	serverInternalError: boolean;
	requiredValidationError: boolean;
	readingUnavailableError: boolean;
	serverValidationError: boolean;
	results: EventEmitter<Weather> = new EventEmitter<Weather>();
	
	constructor(fb: FormBuilder, private weatherService: WeatherService) {
		this.weatherSearchFormGroup = fb.group({
			'searchParam': ['']
		});
		this.clearErrors();
	}

	clearErrors(): void{
		this.serverValidationError = false;
		this.serverInternalError = false;
		this.requiredValidationError = false;
		this.readingUnavailableError = false;
	}
	onSubmit(value: string): void {
		this.clearErrors();
		let enteredSearchParam : string = this.weatherSearchFormGroup.controls['searchParam'].value;
		if(enteredSearchParam) {
			let weatherUrl : string = `${WeatherSearchComponent.BASE_URL}${enteredSearchParam}`;
			console.log('weatherUrl: ', weatherUrl);
			this.loading = true;
			this.weatherService.getWeather(weatherUrl)
				.subscribe(
					(results: any) => {
						console.log('WeatherSearchComponent::onSubmit() subscribe results: ', results);
						if(results.value.rightnow){
							this.results.emit(results.value);
						}
						else{
							this.readingUnavailableError = true;
							this.results.emit(null);
						}
						this.loading = false;
					},
					(err: any) => { // on error
						console.log(err);
						if(err == 400){
							this.serverValidationError = true;
						}
						else{
							this.serverInternalError = true;
						}
						this.results.emit(null);
						this.loading = false;
					},
					() => { // on completion
						this.loading = false;
					}
				);
		}
		else{
			this.requiredValidationError = true;
		}
	}
}
