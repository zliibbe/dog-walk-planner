import React from "react";
import "../App/App.css";
import Form from "../Form/Form";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import MyWalks from "../MyWalks/MyWalks";
import { Switch, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forecast: [],
      numberOfDays: 0,
      selectedDays: [],
      error: false
    };
  }

  selectDay = (date) => {
    // if(this.state.numberOfDays === 0) {
    //   this.setState({ error: true })
    // }
    // if(this.state.error === true){

    // }
    console.log("You clicked: ", date);
    const dayCard = this.state.forecast.find(day => day.date === date);

    // console.log(typeof this.state.numberOfDays, "<Type?")      
    if (this.state.selectedDays.length < this.state.numberOfDays) {
      this.state.numberOfDays++
      console.log(typeof this.state.numberOfDays, "<--Type?")
      this.setState({ selectedDays: [...this.state.selectedDays, dayCard] });
    } else if (this.state.selectedDays.length === this.state.numberOfDays) {
      let updatedDays = this.state.selectedDays;
      updatedDays.shift();
      updatedDays.push(dayCard);
      this.setState({ selectedDays: updatedDays });
    
    }
  };

  addNumber = (num) => {
    this.setState({ numberOfDays: num })
  }

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
                  <div className="background-photo">
                    <section className="header">
                      <h1 className="title">Dog Walk Planner</h1>
                      <NavLink to="/myWalks" className="nav">My Walks</NavLink>
                    </section>
                    <p className="site-overview">
                      You're busy and want the best for your dog. But you don't
                      know when it's best walk your dog? Use this site's automated
                      suggestions to provide you with of optimal walking weather
                      for any given week.
                    </p>
                  </div>

                  <Form addNumber={this.addNumber}/>
                  {this.state.numberOfDays!==0 && <p className="number-of-days">Please select {this.state.numberOfDays} days: </p>}
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
          <Route exact path="/myWalks" render={() => {}}>
            <MyWalks numberOfDays={this.state.numberOfDays} selectedDays={this.state.selectedDays} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
