import React from "react";
import "../App/App.css";
import Form from "../Form/Form";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import MyWalks from "../MyWalks/MyWalks";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forecast: [],
      numberOfDays: 0,
      selectedDays: [],
    };
  }

  selectDay = (date) => {
    console.log("You clicked: ", date);
    const dayDate = this.state.forecast.find((day) => day.date === date);

    if (this.state.selectedDays.length < 3) {
      this.setState({ selectedDays: [...this.state.selectedDays, dayDate] });
    } else if (this.state.selectedDays.length === 3) {
      let updatedDays = this.state.selectedDays;
      updatedDays.shift();
      updatedDays.push(dayDate);
      this.setState({ selectedDays: updatedDays });
    }
  };

  fetchForecast = () => {
    const fetchSevenDayForecast = fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=ccaf26f488134742923150520221604&q=80904&days=7&alerts=no"
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
    this.fetchForecast();
  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <React.Fragment>
                  <section className="header">
                    <h1 className="title">Dog Walk Planner</h1>
                    <p className="page-link">My Walks</p>
                  </section>
                  <p className="site-overview">
                    You're busy and want the best for your dog. But you don't
                    know when it's best walk your dog? Use this site's automated
                    suggestions to provide you with of optimal walking weather
                    for any given week.
                  </p>

                  <Form />
                  <div className="weekly-forecast">
                    <WeeklyForecast
                      forecast={this.state.forecast}
                      selectedDays={this.state.selectedDays}
                      selectDay={this.selectDay}
                    />
                  </div>
                </React.Fragment>
              );
            }}
          ></Route>
          {/* <MyWalks walks={this.state.selectedWalks} /> */}
          <Route exact path="/myWalks" render={() => {}}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;