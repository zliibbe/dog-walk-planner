import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (
      // <form className="form">
        <select
          id="number-of-days"
          name="number-of-days"
          placeholder="#"
        >
          <option value="">#</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        // </form>
    )
  }
}

export default Form