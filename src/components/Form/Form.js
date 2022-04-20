import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (
      <form className="weekly-form">
        <label htmlFor="monday-checkbox">Monday</label>
        <input id="monday" name="monday-checkbox" value="Monday" type="checkbox"></input>
        
        <label htmlFor="tuesday-checkbox">Tuesday</label>
        <input id="tuesday" name="tuesday-checkbox" value="Tuesday" type="checkbox"></input>

        <label htmlFor="wednesday-checkbox">Wednesday</label>
        <input id="wednesday" name="wednesday-checkbox" value="Wednesday"  type="checkbox"></input>

        <label htmlFor="thursday-checkbox">Thursday</label>
        <input id="thursday" name="thursday-checkbox" value="Thursday"  type="checkbox"></input>

        <label htmlFor="friday-checkbox">Friday</label>
        <input id="friday" name="friday-checkbox" value="Friday"  type="checkbox"></input>

        <label htmlFor="saturday-checkbox">Saturday</label>
        <input id="saturday" name="saturday-checkbox" value="Saturday"  type="checkbox"></input>

        <label htmlFor="sunday-checkbox">Sunday</label>
        <input id="sunday" name="sunday-checkbox" value="Sunday"  type="checkbox"></input>

        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default Form