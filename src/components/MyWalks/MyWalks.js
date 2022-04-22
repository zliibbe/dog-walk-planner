import React from "react"
import './MyWalks.css'
import Day from '../Day/Day'

const MyWalks = ({ walks }) => {
  
  
  <section className="my-walks">
    <section className="my-walks-header">
      <h1 className="title">Dog Walk Planner</h1>
      {/*<Home btn>*/}
      <p className="walking-days">I'm walking # days this week.`</p>
    </section>
    <section className="my-walks-display">
      <Day />
    </section>
  </section>

}

export default MyWalks