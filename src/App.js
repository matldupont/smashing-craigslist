import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ad from './Ad';
import ChatButton from './ChatButton';
import Gallery from './Gallery';
import Header from './Header';
import Location from './Location';
import Search from './Search';
import SellerRating from './SellerRating';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Ad />
        <SellerRating />
        <Location />
      </div>
    );
  }
}

export default App;
