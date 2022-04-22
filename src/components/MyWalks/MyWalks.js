import React from "react"
import './MyWalks.css'
import Day from '../Day/Day'
import { Route, NavLink } from 'react-router-dom';

const MyWalks = ({ selectedDays, numberOfDays }) => {
  console.log("selectedDays: ", selectedDays)
  console.log("numberOfDays: ", numberOfDays);
  const days = selectedDays.map(day => {
    return <Day 
            date={day.date}
            imageSrc={day.day.condition.icon}
            iconText={day.day.condition.text}
            maxTemp={day.day.maxtemp_f}
            minTemp={day.day.mintemp_f}
            avgTemp={day.day.avgtemp_f}
            key={day.date}
            // selectDay={selectDay}
         />
  })
  return(
  <div className="my-walk">
    <section className="my-walks-container">
      <section className="my-walks-header">
        <h1 className="title">Dog Walk Planner</h1>
        <p className="walking-days">I'm walking {`${numberOfDays}`} days this week.</p>
      </section>
      <section className="my-walks-display">
        {days}
      </section>
      <NavLink to="/" className="nav">Home</NavLink>
    </section>
  </div>
  )
}

export default MyWalks