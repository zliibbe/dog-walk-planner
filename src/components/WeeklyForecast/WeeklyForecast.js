import React from 'react'
import './WeeklyForecast.css'
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

  callTwoFunctions = (event) => {
    this.props.selectDay(event.currentTarget.id)
    
  }

  render() {

    const weatherDays = this.props.forecast.map (day =>{
      const dayKey = day.date
      const foundSelectedDay = this.props.selectedDays.findIndex(activeDay => activeDay.date === dayKey)

      return (
        <div className={`day-container ${(foundSelectedDay === -1) ? '' : 'active'}`} key={day.date} id={day.date} tabIndex={0} onClick={(event) => this.callTwoFunctions(event)}>
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
      <section className="weekly-calendar">
        {weatherDays}
      </section>
    )
  }
}

export default WeeklyForecast