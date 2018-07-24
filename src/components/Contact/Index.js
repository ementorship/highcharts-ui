import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';
import CategoryListComponent from'./CategoryList';
import HighchartsErrors from './HighchartsErrors';
import FooterBanner from './FooterBanner';

class ContactIndex extends Component {
  render() {
    return (
      <div className="main-page-wrraper">
        <Toolbar />
        <section className="banner-section inner-pages-banner">
            <div className="container">
              <div className="index-banner-outer">
              <div className="row row-aligned">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-aligned">
                <div className="banner-content">
                  <h1>Contact Us</h1>
                  <p>This section contain all the Question and Answer related to Highcharts , JavaScript, Jquery and  HTML & CSS, asked by the community over the web.</p>
                </div>
                </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-aligned">
                    <div className="page-bradcrums-outer">
                      <ul className="bradcrums-list">
                        <li><a href="/" className="bradcrums-links">Home</a></li>
                        <li><span className="bradcrums-links active">Contact Us</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
         <main className="page-content-wrapper faq-page-section">
          <div className="container">
          <div className="row">
            <section className="col-lg-6 col-md-6 col-sm-12">
                <div className="conatct-form-desc">
                  <h2>Feel Free To Contact Us</h2>
                  <p></p>
                </div>
            </section>
            <section className=" col-lg-6 col-md-6 col-sm-12">
              <div className="contact-form-outer">
                  <form>
                    <div className="form-group">
                      <label>Full Name </label>
                      <input className="input-ctrl" type="text" placeholder="Enter your full name"/>
                    </div>
                    <div className="form-group">
                      <label>Email Address </label>
                      <input className="input-ctrl" type="email" placeholder="Enter your email address"/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number </label>
                      <input className="input-ctrl" type="text" placeholder="Enter your phone"/>
                    </div>
                    <div className="form-group">
                      <label>Subject </label>
                      <input className="input-ctrl" type="text" placeholder="Enter subject"/>
                    </div>
                    <div className="form-group">
                      <label>Message </label>
                      <textarea className="input-ctrl" cols="20" rows="5" type="text" placeholder="Enter your message here"/>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn">Send Message</button>
                    </div>
                  </form>
              </div>
            </section>
          </div>
          </div>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default ContactIndex;
