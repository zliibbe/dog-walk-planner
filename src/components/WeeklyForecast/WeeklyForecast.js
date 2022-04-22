import React from 'react'
import Day from '../Day/Day'
import './WeeklyForecast.css'

const WeeklyForecast = ({ forecast, selectedDays, selectDay }) => {
const weatherDays= forecast.map (day =>{
  
  return <Day 
            date={day.date}
            imageSrc={day.day.condition.icon}
            iconText={day.day.condition.text}
            maxTemp={day.day.maxtemp_f}
            minTemp={day.day.mintemp_f}
            avgTemp={day.day.avgtemp_f}
            key={day.date}
            selectDay={selectDay}
         />
})

  return (
    <section className="weekly-calendar">
      {weatherDays}
    </section>
  )
}

export default WeeklyForecast