import React from 'react'
import Day from '../Day/Day'
import './WeeklyForecast.css'

const WeeklyForecast = (props) => {
  console.log("WF-Props: ", props)
const weatherDays= props.forecast.map (day =>{
  return <Day 
            date={day.date}
            imageSrc={day.day.condition.icon}
            iconText={day.day.condition.text}
            maxTemp={day.day.maxtemp_f}
            minTemp={day.day.mintemp_f}
            avgTemp={day.day.avgtemp_f}
            key={day.date}
         />
})

  return (
    <section className="weekly-calendar">
      {weatherDays}
    </section>
  )
}

export default WeeklyForecast