import React, { Component } from 'react';
import '../App.css';
import burger from '../images/burger.svg';




export default class SelectionCard extends Component {
    render() {
        return(
            <div className="selection-card__section">
                <h1>Making it easy to find things to do</h1>
                <div className="selection-card__list">
                    <h4>Step 1 - Select a category.</h4>
                    <div className="selection-card__flex">
                            <button className="selection-card">
                                <div className="selection-card__img-box">
                                    <img src= {this.props.images[0].path[0].burger} />
                                    <p>Food</p>
                                </div>
                            </button>
                            <button className="selection-card">
                                <div className="selection-card__img-box">
                                    <img src= {this.props.images[0].path[1].popcorn} />
                                    <p>Entertainment</p>
                                </div>
                            </button>
                            <button className="selection-card">
                                <div className="selection-card__img-box">
                                    <img src= {this.props.images[0].path[2].bike} />
                                    <p>Activity</p>
                                </div>
                            </button>
                    </div>
                </div>
                <button> Continue </button>
            </div>
        )
    }
}