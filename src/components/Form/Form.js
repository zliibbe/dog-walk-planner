import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { numberOfDays: 0 };
  }

  handleChange = (event) => {
    this.setState({ numberOfDays: [event.target.value] });
  };

  render() {
    return (
      <form className="numDaysForm" onChange={event => this.handleChange(event)}>
        <p className="form-label">Number of days I want to walk my dog this week:</p>
        <input
          type="number"
          placeholder="1-7 Days"
          className="number-of-days"
          name="number-of-days"
          min="1"
          max="7"
        />
      </form>
    );
  }
}

export default Form;
