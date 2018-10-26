import React, { Component } from 'react';
import MainPage from './components/MainPage'
import './App.css';
import burger from './images/burger.svg';
import popcorn from './images/popcorn.svg';
import bike from './images/bike.svg';

class App extends Component {
  state = {
    images: [
      {
        path:[{burger},{popcorn},{bike}],
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <MainPage {...this.state} />
      </div>
    );
  }
}

export default App;
