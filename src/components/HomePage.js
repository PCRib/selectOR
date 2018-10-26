import React, { Component } from 'react';
import '../App.css';
import SelectionCard from './SelectionCard';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <SelectionCard {...this.props}/>
      </div>
    );
  }
}
