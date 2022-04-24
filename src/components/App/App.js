import React from "react";
import "../App/App.css";
import Form from "../Form/Form";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import MyWalks from "../MyWalks/MyWalks";
import { Switch, Route, NavLink } from "react-router-dom";
import Layout from '../Layout/Layout'
// require('dotenv').config()

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forecast: [],
      numberOfDays: 0,
      selectedDays: [],
      recommendedDays: [],
      error: false
    };
  }
  
  recommendDays = (numOfDays) => {
    const copyForecastDays = [...this.state.forecast]
    copyForecastDays.sort((a,b) => a.day.avgtemp_f - b.day.avgtemp_f)
    copyForecastDays.splice(0, (7-numOfDays))
    this.setState({ recommendedDays: copyForecastDays})
    return
  }

   selectDay = (date) => {
    if(this.state.numberOfDays === 0){
      this.setState({ error: true })
      return
    }

    if(this.state.selectedDays.find(day => day.date === date)) {
      this.setState({
        selectedDays : (this.state.selectedDays.filter(day => day.date!== date))
      })
      return
    }
    
    console.log("You clicked: ", date);
    const dayCard = this.state.forecast.find(day => day.date === date);
    // if(!this.state.selectedDays.includes(date)){ ERROR HANDLING?
      if (this.state.selectedDays.length < this.state.numberOfDays) {
        this.setState({ selectedDays: [...this.state.selectedDays, dayCard] })
      } else if (this.state.selectedDays.length === parseInt(this.state.numberOfDays)) {
        let updatedDays = this.state.selectedDays;
        updatedDays.shift();
        this.setState({ selectedDays: [...updatedDays, dayCard] })
      }
  };

  addFavoriteDays = () => {
    this.setState({
      favoriteDays: this.state.selectedDays,
      numberOfDays: 0,
      selectedDays: [],
      recommendedDays: [],
    })
  }

  addNumber = (num) => {
    this.setState({ numberOfDays: num })
  }

  fetchSevenDayForecast = () => {
    const fetchSevenDayForecast = fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ccaf26f488134742923150520221604&q=80904&days=7&alerts=no`
    )
      .then((response) => {
        if (response.status === 404) {
          throw new Error("404: Not Found");
        } else if (response.status === 500) {
          throw new Error("500: Server is having issues");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ forecast: data.forecast.forecastday });
      });
    return fetchSevenDayForecast;
  };

  componentDidMount() {
    this.fetchSevenDayForecast();
  }

  render() {
    return (
      <main className="App">
        <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                    <WeeklyForecast
                      forecast={this.state.forecast}
                      selectedDays={this.state.selectedDays}
                      recommendedDays={this.state.recommendedDays}
                      selectDay={this.selectDay}
                      addFavoriteDays={this.addFavoriteDays}
                      addNumber={this.addNumber} 
                      error={this.state.error} recommendDays={this.recommendDays}
                    />
              );
            }}
          ></Route>

          <Route 
            exact path="/myWalks" 
            render={() => {}}
          >
            <MyWalks 
            numberOfDays={this.state.numberOfDays} 
            favoriteDays={this.state.favoriteDays} />
          </Route>
        </Switch>
        </Layout>
      </main>
    );
  }
}

export default App;
