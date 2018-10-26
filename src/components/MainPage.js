import React, { Component } from 'react';
import NavBar from './NavBar'
import HomePage from './HomePage'
import '../App.css';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage {...this.props}/>
      </div>
    );
  }
}

