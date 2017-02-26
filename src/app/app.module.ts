import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common'; 

import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';
import { RightNowComponent } from './right-now/right-now.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponentComponent },
{ path: 'about', component: AboutComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		WeatherSearchComponent,
		HomeComponentComponent,
		AboutComponent,
		RightNowComponent,
		ForecastComponent,
		ForecastListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy }, 
  		{ provide: APP_BASE_HREF, useValue: './' },
		{ provide: WeatherService, useClass: WeatherService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));