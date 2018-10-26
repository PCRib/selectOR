import React, { Component } from 'react';
import '../App.css';

export default class NavBar extends Component {
    render() {
        return(
            <nav className="selector_nav">
                <a href="#">selectOR</a>
                <div className="selector_nav-links">
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </div>
            </nav>
        )
    }
}