import React from "react"
import './Day.css'
var dayjs = require('dayjs')

const Day = ({date, imageSrc, iconText, minTemp, maxTemp, avgTemp, selectDay}) => {
  return (
    <div className="day-container" onClick={event => selectDay(date)}>
      <p className="day-of-week">{dayjs(date).format('dddd')}</p>
      <p className="date">{dayjs(date).format('MMMM D')}</p>
      <img className= "icon" src={imageSrc} alt="weather-icon"></img>
      <p className="icon-text">{iconText}</p>
      <p className="temp-high">High: {maxTemp}°</p>
      <p className="temp-low">Low: {minTemp}°</p>
      <p className="avg-temp">Avg: {avgTemp}°</p>
    </div>
  )
}

export default Day