import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';

class HomeIndex extends Component {
  render() {
    return (
      <div className="main-page-wrraper">
        <Toolbar />
        <section className="banner-section index-banner">
            <div className="container">
              <div className="index-banner-outer">
              <div className="banner-content">
                <h1>Build & Setup interactive charts with zero coding</h1>
                <p>Charts UI helps to build and set up interactive charts to your web pages with zero knowlage of coding.</p>
                <NavLink to="/"  className="btn banner-btn"> Generate Charts </NavLink>
              </div>
              </div>
            </div>
        </section>
         <main className="page-content-wrapper chart-gallery-page">
          <section className="dfgdg">

          </section>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default HomeIndex;
