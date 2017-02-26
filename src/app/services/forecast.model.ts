export class Forecast {

	dayOfWeek: string;
	weatherIconUrl: string;
	weatherDescription: string;
	lowTemp: string;
	highTemp: string;
	
	constructor(
	dayOfWeek: string,
	weatherIconUrl: string,
	weatherDescription: string,
	lowTemp: string,
	highTemp: string){
		this.dayOfWeek = dayOfWeek;
		this.weatherIconUrl = weatherIconUrl;
		this.weatherDescription = weatherDescription;
		this.lowTemp = lowTemp;
		this.highTemp = highTemp;
	}
}