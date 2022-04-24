import React from "react"
import { NavLink } from "react-router-dom"
import './Layout.css'

const Layout = (props) => {
  return (
  <>
    <div className="background-photo">
      <section className="header">
      <h1 className="title">Dog Walk Planner</h1>
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/myWalks" className="nav">My Walks</NavLink>
      </section>
      <p className="site-overview">
      You're busy, but want the best for your dog. And you don't
      know when, with your limited time, it's best walk your dog? Use this site's automated
      suggestions to provide you with of optimal walking weather
      for any given week.
      </p>
    </div>
      {props.children}
  </>
  )
}

export default Layout