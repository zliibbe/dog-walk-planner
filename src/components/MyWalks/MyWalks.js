import React from "react"
import './MyWalks.css'
import { Route, NavLink } from 'react-router-dom';
var dayjs = require('dayjs')

const MyWalks = ({ favoriteDays }) => {
  const days = favoriteDays.map(day => {
      return <div className={'day-container'} key={day.date} id={day.date} tabIndex={0} onClick={(event) => this.callTwoFunctions(event)}>
          <p className="day-of-week">{dayjs(day.date).format('dddd')}</p>
          <p className="date">{dayjs(day.date).format('MMMM D')}</p>
          <img className= "icon" src={day.day.condition.icon} alt="weather-icon"></img>
          <p className="icon-text">{day.day.condition.text}</p>
          <p className="temp-high">High: {day.day.maxtemp_f}°</p>
          <p className="temp-low">Low: {day.day.mintemp_f}°</p>
          <p className="avg-temp">Avg: {day.day.avgtemp_f}°</p>
        </div> 
  })
  return(
      <section className="my-walks-display">
        {days}
      </section>
  )
}

export default MyWalks