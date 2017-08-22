import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Categories from './Components/Categories'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Categories />
        <div className="next">
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
