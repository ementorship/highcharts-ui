import React, { Component } from 'react';
import './dist/style.css';

class Toolbar extends Component {
  constructor(props){
      super(props)
    }


  render() {
    return (
      <section className="container">
        <nav className="navbar">
            <a href="index.html" className="nav-brand animated fadeInUp">HighCharts UI</a>
            <div className="navbar navbar-outer">
              <ul className="navbar-menu center-navbar animated fadeInUp" type="navbar">
                  <li><a className="menu-links active" href="#">About</a></li>
                  <li><a className="menu-links" href="#">Chart Gallery</a></li>
                  <li><a className="menu-links" href="#">How It Works</a></li>
                  <li><a className="menu-links" href="#">FAQs</a></li>
                  <li><a className="menu-links" href="contact-us.html">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </section>
    );
  }
}

export default Toolbar;
