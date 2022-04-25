describe('dog walk app with suggestions based on weather', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept("GET", "https://api.weatherapi.com/v1/forecast.json?key=ccaf26f488134742923150520221604&q=80904&days=7&alerts=no", {
      "location": {
      "name": "Colorado Springs",
      "region": "Colorado",
      "country": "USA",
      "lat": 38.86,
      "lon": -104.87,
      "tz_id": "America/Denver",
      "localtime_epoch": 1650836151,
      "localtime": "2022-04-24 15:35"
      },
      "current": {
      "last_updated_epoch": 1650835800,
      "last_updated": "2022-04-24 15:30",
      "temp_c": 9,
      "temp_f": 48.2,
      "is_day": 1,
      "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
      },
      "wind_mph": 4.3,
      "wind_degree": 60,
      "wind_dir": "ENE",
      "pressure_in": 30.11,
      "precip_in": 0.01,
      "humidity": 40,
      "cloud": 75,
      "feelslike_f": 44.5,
      "vis_miles": 9,
      "uv": 2,
      "gust_mph": 9.6
      },
      "forecast": {
      "forecastday": [
      {
      "date": "2022-04-24",
      "date_epoch": 1650758400,
      "day": {
      "maxtemp_f": 45,
      "mintemp_f": 21.6,
      "avgtemp_f": 33.9,
      "maxwind_mph": 9.4,
      "totalprecip_in": 0.3,
      "avgvis_miles": 5,
      "avghumidity": 56,
      "daily_will_it_rain": 1,
      "daily_chance_of_rain": 98,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 22,
      "condition": {
      "text": "Moderate rain",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
      "code": 1189
      },
      "uv": 6
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-25",
      "date_epoch": 1650844800,
      "day": {
      "maxtemp_f": 48.6,
      "mintemp_f": 18,
      "avgtemp_f": 33.7,
      "maxwind_mph": 6.5,
      "totalprecip_in": 0.12,
      "avgvis_miles": 5,
      "avghumidity": 61,
      "daily_will_it_rain": 1,
      "daily_chance_of_rain": 89,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 9,
      "condition": {
      "text": "Patchy rain possible",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
      "code": 1063
      },
      "uv": 8
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-26",
      "date_epoch": 1650931200,
      "day": {
      "maxtemp_f": 64.8,
      "mintemp_f": 30.4,
      "avgtemp_f": 48.2,
      "maxwind_mph": 12.5,
      "totalprecip_in": 0,
      "avgvis_miles": 6,
      "avghumidity": 44,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 9
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-27",
      "date_epoch": 1651017600,
      "day": {
      "maxtemp_f": 69.8,
      "mintemp_f": 43.7,
      "avgtemp_f": 56.4,
      "maxwind_mph": 17.2,
      "totalprecip_in": 0,
      "avgvis_miles": 6,
      "avghumidity": 28,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 8
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-28",
      "date_epoch": 1651104000,
      "day": {
      "maxtemp_f": 70.9,
      "mintemp_f": 39.2,
      "avgtemp_f": 55.9,
      "maxwind_mph": 14.3,
      "totalprecip_in": 0,
      "avgvis_miles": 6,
      "avghumidity": 21,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 10
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-29",
      "date_epoch": 1651190400,
      "day": {
      "maxtemp_f": 58.1,
      "mintemp_f": 33.6,
      "avgtemp_f": 44.7,
      "maxwind_mph": 23.7,
      "totalprecip_in": 0,
      "avgvis_miles": 6,
      "avghumidity": 29,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 3
      },
      "astro": {},
      "hour": []
      },
      {
      "date": "2022-04-30",
      "date_epoch": 1651276800,
      "day": {
      "maxtemp_f": 62.2,
      "mintemp_f": 25,
      "avgtemp_f": 43.7,
      "maxwind_mph": 10.3,
      "totalprecip_in": 0,
      "avgvis_miles": 6,
      "avghumidity": 35,
      "daily_will_it_rain": 0,
      "daily_chance_of_rain": 0,
      "daily_will_it_snow": 0,
      "daily_chance_of_snow": 0,
      "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
      },
      "uv": 3
      },
      "astro": {},
      "hour": []
      }
      ]
      }
      }).as('get-weather-data')
  })

  it('displays a home page with a header with buttons and shows a site overview on load', () => {
    cy.get(".title")
    .contains("Dog Walk Planner")
    .get(".nav")
    .contains("Home")
    .get(".site-overview")
    .contains("You're busy, but want the best for your dog.")
  })

  it('displays weather cards with weather information starting at the current day', () => {
    cy.get(".day-container").first().within(() => {
      cy.get('.day-of-week').should('have.text', 'number')

    })
  })

  it('has a form that allows the user to enter the number of days they want to walk this week', () => {
    cy.get(".form-label")
    .contains("Number of days I want to walk my dog this week:")
    .get("input")
    .type("2")
    .get(".number-of-days-form").click()
  })

})