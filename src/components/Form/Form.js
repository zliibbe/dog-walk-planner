import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = { numberOfDays: 0 };
  }

  handleChange = (event) => {
    this.setState({ numberOfDays: [event.target.value] })
  };

  submitNumber = (event) => {
    event.preventDefault()
    this.props.addNumber(parseInt(this.state.numberOfDays))
    this.props.recommendDays(parseInt(this.state.numberOfDays))
    this.setState({ numberOfDays: 0})
  }

  render() {

    return (
      <form className="numDaysForm">
        <p className="form-label">Number of days I want to walk my dog this week:</p>
        <input
          onChange={event => this.handleChange(event)}
          type="number"
          placeholder="1-7 Days"
          value={this.state.numberOfDays}
          className="number-of-days-form"
          name="number-of-days"
          min="1"
          max="7"
        />
        <button className="submit-days-button" onClick={e => {this.submitNumber(e)} }>Get Recommended Days</button>
      </form>
    );
  }
}

export default Form;
