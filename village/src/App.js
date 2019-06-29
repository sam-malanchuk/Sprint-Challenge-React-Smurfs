import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data);
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>The Smurfs</h1>
          <nav>
            <NavLink to='/'>The Village</NavLink>
            <NavLink to='/add'>Add Smurf</NavLink>
          </nav>
        </div>
        <div className="container">
          <Route path='/' exact render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
          <Route path='/add' render={props => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
        </div>
      </div>
    );
  }
}

export default App;
