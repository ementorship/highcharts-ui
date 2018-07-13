import React, { Component } from 'react';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';

class AboutIndex extends Component {
  render() {
    return (
      <div className="main-page-wrraper">
        <Toolbar />
        <Footer/>
      </div>
    );
  }
}

export default AboutIndex;
