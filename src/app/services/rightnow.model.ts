export class RightNow {
	city: string;
	temp: string;
	weatherIconUrl: string;
	weatherDescription: string;
	
	constructor(
	city: string,
	temp: string,
	weatherIconUrl: string,
	weatherDescription: string){
		this.city = city;
		this.temp = temp;
		this.weatherIconUrl = weatherIconUrl;
		this.weatherDescription = weatherDescription;
	}
}