import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <div className="map">
                  <Map/>
              </div>
              <Footer/>
          </div>
      );
  }
}

export default App;
