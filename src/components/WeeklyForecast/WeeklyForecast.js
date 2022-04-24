import React from 'react'
import './WeeklyForecast.css'
import Form from '../Form/Form'

var dayjs = require('dayjs')

class WeeklyForecast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.forecast.forEach(day => {
      this.setState({ [day.date]: ''})
    })
  }

  render() {
    const weatherDays = this.props.forecast.map (day =>{
      const dayKey = day.date
      const findSelectedDay = this.props.selectedDays.findIndex(activeDay => activeDay.date === dayKey)
      const findRecommendedDay = this.props.recommendedDays.findIndex(recDay => recDay.date === dayKey)
      
      return (
        <div className={`day-container ${(findSelectedDay === -1) ? '' : 'active'} ${(findRecommendedDay === -1) ? '' : 'recommended'}`} key={day.date} id={day.date} tabIndex={0} onClick={(event) => this.props.selectDay(event.currentTarget.id)}>
          <p className="day-of-week">{dayjs(day.date).format('dddd')}</p>
          <p className="date">{dayjs(day.date).format('MMMM D')}</p>
          <img className= "icon" src={day.day.condition.icon} alt="weather-icon"></img>
          <p className="icon-text">{day.day.condition.text}</p>
          <p className="temp-high">High: {day.day.maxtemp_f}°</p>
          <p className="temp-low">Low: {day.day.mintemp_f}°</p>
          <p className="avg-temp">Avg: {day.day.avgtemp_f}°</p>
        </div> 
      )
  })

    return (
      <>
    <Form addNumber={this.props.addNumber} error={this.props.state.error} recommendDays={this.props.recommendDays}/>

    <div className="user-display-day-number">
      {this.state.numberOfDays!==0 && <p className="number-of-days">Please select {this.state.numberOfDays} days: </p>}
       <p className="error-msg" onMouseOver={()=> this.setState({error: false})}>{this.state.error && 'Please enter number of days.'}</p>
      <div></div>
    </div>
    <div className="weekly-forecast">
    </div>
    
      <div 
        className="add-to-my-walks" 
        onClick={() => {this.props.addFavoriteDays()}}>
          Add to My Walks
      </div>
      <section className="weekly-calendar">
        {weatherDays}
      </section>
      </>
    )
  }
}

export default WeeklyForecast