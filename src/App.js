import React, { Component } from 'react';
import Map from './components/Map';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
