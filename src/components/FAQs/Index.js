import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';
import CategoryListComponent from'./CategoryList';
import HighchartsErrors from './HighchartsErrors';
import FooterBanner from './FooterBanner';

class FAQsIndex extends Component {
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
                  <h1>FAQs and Q&A</h1>
                  <p>This section contain all the Question and Answer related to Highcharts , JavaScript, Jquery and  HTML & CSS, asked by the community over the web.</p>
                </div>
                </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-aligned">
                    <div className="page-bradcrums-outer">
                      <ul className="bradcrums-list">
                        <li><a href="/" className="bradcrums-links">Home</a></li>
                        <li><span className="bradcrums-links active">FAQs and Q&A</span></li>
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
            <section className="col-lg-9 col-md-9 col-sm-12 faqs-section-outer">
              <HighchartsErrors />
            </section>
            <aside className="col-lg-3 col-md-3 col-sm-12 faqs-aside-outer">
                <CategoryListComponent />
            </aside>
          </div>
          </div>
          </main>
          <FooterBanner />
        <Footer/>
      </div>
    );
  }
}

export default FAQsIndex;
