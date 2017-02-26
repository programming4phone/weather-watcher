import { RightNow } from './rightnow.model';
import { Forecast } from './forecast.model';
export class Weather {

	rightnow: RightNow;
	forecasts: Forecast[];
	
	constructor(
	rightnow: RightNow,
	forecasts: Forecast[]){
		this.rightnow = rightnow;
		this.forecasts = forecasts;
	}
}