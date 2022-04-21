import React from "react"
import './Day.css'
var dayjs = require('dayjs')

const Day = ({date, imageSrc, iconText, minTemp, maxTemp, avgTemp}) => {
  return (
    <div className="day-container">
      <h2 className="day-of-week">Monday</h2>
      <h2 className="date">{date}</h2>
      <img className= "icon" src={imageSrc} alt="weather-icon"></img>
      <p className="icon-text">{iconText}</p>
      <p className="temp-high">High: {maxTemp}°</p>
      <p className="temp-low">Low: {minTemp}°</p>
      <p className="avg-temp">Avg: {avgTemp}°</p>
    </div>
  )
}

export default Day