import React from 'react'
import './WeeklyForecast.css'
import Form from '../Form/Form'
import PropTypes from 'prop-types';
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
          <div className='date-display'>
            <p className="day-of-week">{dayjs(day.date).format('dd').toUpperCase()}</p>
            <p className="month">{dayjs(day.date).format('MMMM').toUpperCase()}</p>
            <p className="date">{dayjs(day.date).format('DD')}</p>
          </div>
          <hr />  
          <img className= "icon" src={day.day.condition.icon} alt="weather-icon"></img>
          <p className="icon-text">{day.day.condition.text}</p>
          <hr />  
          <p className="temp-high">High: {Math.round(day.day.maxtemp_f)}°</p>
          <p className="temp-low">Low: {Math.round(day.day.mintemp_f)}°</p>
        </div> 
      )
  })

    return (
    <>
      <Form 
        addNumber={this.props.addNumber} 
        error={this.props.error} 
        recommendDays={this.props.recommendDays}
        numberOfDays={this.props.numberOfDays}
      />

      <div className="user-display-day-number">
        
        <p className="error-msg" onMouseOver={()=> this.props.resetError()}>
        {this.props.error && 'Please enter number of days.'}</p>
      </div>
      {this.props.numberOfDays!==0 && <div className='instructions-add-walks-button'>
           <p className="number-of-days">Please select {this.props.numberOfDays} days below ( ⭐️  indicates a recommended day) and add to My Walks: </p>
          <div 
            className="add-to-my-walks-button" 
            onClick={() => {this.props.addFavoriteDays()}}>
              Save Selected as My Walks
          </div>
        </div>}
        <section className="weekly-calendar">
          {weatherDays}
        </section>
      </>
    )
  }
}

export default WeeklyForecast

WeeklyForecast.propTypes = {
  addNumber: PropTypes.func.isRequired,
  recommendedDays: PropTypes.array.isRequired,
  numberOfDays: PropTypes.number,
  forecast: PropTypes.array.isRequired,
  selectedDays: PropTypes.array.isRequired,
  selectDay: PropTypes.func.isRequired,
  addFavoriteDays: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  resetError: PropTypes.func.isRequired
}
