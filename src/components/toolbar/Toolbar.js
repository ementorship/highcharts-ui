import React, { Component } from 'react';
import './dist/style.css';
import {NavLink} from 'react-router-dom'
class Toolbar extends Component {
  constructor(props){
      super(props)
    }


  render() {
    return (
    <header className="header full-background">
      <section className="container">
        <nav className="navbar">
            <NavLink to="/" className="nav-brand animated fadeInUp">Charts UI</NavLink>
            <div className="navbar navbar-outer">
              <ul className="navbar-menu center-navbar animated fadeInUp" type="navbar">
                  <li><NavLink className="menu-links" to="/about-us">About</NavLink></li>
                  <li><NavLink className="menu-links" to="/chart-gallery">Chart Gallery</NavLink></li>
                  <li><NavLink className="menu-links" to="/about-us">How It Works</NavLink></li>
                  <li><NavLink className="menu-links" to="/faqs/highcharts-errors">FAQs</NavLink></li>
                  <li><NavLink className="menu-links" to="/contact-us">Contact Us</NavLink></li>
              </ul>
            </div>
          </nav>
        </section>
    </header>
    );
  }
}

export default Toolbar;
