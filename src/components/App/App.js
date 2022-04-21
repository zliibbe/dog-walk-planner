import React from 'react'
import '../App/App.css';
import Form from '../Form/Form'
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      forecast: [],
    }
  }

  fetchForecast = () => {
    const fetchSevenDayForecast = fetch('http://api.weatherapi.com/v1/forecast.json?key=ccaf26f488134742923150520221604&q=80904&days=7&alerts=no')
    .then(response => {
        if (response.status === 404) {
            throw new Error("404: Not Found")
        } else if (response.status === 500) {
            throw new Error("500: Server is having issues")
        } else {
            return response.json()
        }
    })
    .then(data => {
      this.setState({forecast: data.forecast.forecastday})
    })
    return fetchSevenDayForecast
  }

  componentDidMount() {
    this.fetchForecast()
  }


  render () {
      return (
        <main className="App">
          <section className="header">
            <h1 className="title">Dog Walk Planner</h1>
            {/* link to MyWalks component */}
          </section>
          <p className="site-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore, atque quae voluptas modi aspernatur architecto libero. Consectetur nulla ut voluptatum tempore dicta ducimus saepe illum! Vitae facere nam nihil?
          </p>

          <p className="form">I want to walk my dog <Form /> days this week.</p>
          <WeeklyForecast forecast={this.state.forecast} />
        </main>
      );
  }
}

export default App;
