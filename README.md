# Weather Watcher

Weather Watcher is an Angular 2 application that that accesses world wide weather conditions and forecast information from [World Weather Online](https://developer.worldweatheronline.com/api/default.aspx).

Just enter a search argument in the form of zip code, city name, or city name and state/province.region.

The app interacts with with a micro service that pulls information from World Weather Online and converts the contents to JSON with CORS headers. For details see [https://github.com/programming4phone/weather.watcher.collector](https://github.com/programming4phone/weather.watcher.collector).

The app is currently deployed on [www.programming4phone.com](http://www.programming4phone.com/weather-watcher/index.html).


## Development stack
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24. The code base also uses Semantic UI 2.2 for styling HTML markup.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
