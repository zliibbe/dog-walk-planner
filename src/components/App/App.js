import React from 'react'
import '../App/App.css';
import Day from '../Day/Day'
import Form from '../Form/Form'


class App extends React.Component {

  componentDidMount() {
    
  }


  render () {
      return (
        <main className="App">
          <p>I want to walk my dog <Form /> days this week.</p>
          <Day />
        </main>
      );
  }
}

export default App;
