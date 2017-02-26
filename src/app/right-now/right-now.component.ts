import { Component } from '@angular/core';
import { RightNow } from '../services/rightnow.model';
@Component({
	selector: 'app-right-now',
	inputs: ['rightnow'],
	templateUrl: './right-now.component.html',
	styleUrls: ['./right-now.component.css']
})
export class RightNowComponent {

	rightnow: RightNow;
	
	constructor() { }

}
