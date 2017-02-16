import { WeatherWatcherPage } from './app.po';

describe('weather-watcher App', function() {
  let page: WeatherWatcherPage;

  beforeEach(() => {
    page = new WeatherWatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
