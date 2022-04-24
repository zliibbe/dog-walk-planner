import React from "react"
import './MyWalks.css'
var dayjs = require('dayjs')

const MyWalks = ({ favoriteDays }) => {
  let days;  
    if(!favoriteDays || favoriteDays.length===0) {
      days = (<h1 className="no-days-msg">You have not added any days yet. Go home to add days.</h1>)
    }
    else {
      days = favoriteDays.map(day => {
        return (
            <div className="day-container" key={day.date} id={day.date} tabIndex={0}>
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
            <p className="sunrise">Sunrise: {day.astro.sunrise}</p>
            <p className="sunset">Sunrise: {day.astro.sunset}</p>
           </div>
        )
      })
    }
  return(
      <section className="my-walks-display">
        {days}
      </section>
  )
}

export default MyWalks