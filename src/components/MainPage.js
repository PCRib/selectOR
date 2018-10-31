import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import NavBar from './NavBar'
import HomePage from './HomePage'
import FoodPage from './FoodPage'
import '../App.css';

export default class MainPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact render={(props)=>{
                                    return(
                                      <HomePage {...this.props}/>
                                    );
                                }} />
            <Route path="/food" exact render={(props)=>{
                                    return(
                                      <FoodPage {...this.props}/>
                                    );
                                }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

