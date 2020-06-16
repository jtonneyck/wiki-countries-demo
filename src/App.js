import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      countries: []
    }
  }

    componentDidMount() {
      axios.get("http://206.189.7.127/countries/").then((response)=> {
        this.setState({countries: response.data})
      })
  }
  render() {

    return (
      <div className="App">
        {this.state.countries.map(country => <h1>{country.name.common}</h1>)}
      </div>
    );
  }
}

export default App;
