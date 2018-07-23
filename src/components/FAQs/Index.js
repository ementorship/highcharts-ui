import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';
import CategoryListComponent from'./CategoryList';

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
              <article className="article-list">
                <h3 className="question-title">Highcharts Error 15 </h3>
                <div className="article-info">
                  <ul>
                    <li><strong>Category - </strong> HighCharts Errors</li>
                    <li><strong>Posted On - </strong> 23 July, 2018</li>
                    <li><strong>Asked By - </strong> Makan Singh </li>
                  </ul>
                </div>
                <div className="answer-box">
                  <p>The plugin is coming as a bonus / free with the theme, users don’t get to have their own purchase codes, but it’s not required, assuming you need it to be able to update the plugin. The option to activate a license was left open for those who already have a license.</p>

                  <p>When you need to update the plugins to the latest version, you just need to Deactivate and Delete the existing plugin and then in your wp-admin panel you will see a notification to install the plugin which you recently removed/deleted. Install and activate that, you are done.
                  </p>
                </div>
              </article>
              <article className="article-list">
                <h3 className="question-title">Highcharts Error 15 </h3>
                <div className="article-info">
                  <ul>
                    <li><strong>Category - </strong> HighCharts Errors</li>
                    <li><strong>Posted On - </strong> 23 July, 2018</li>
                    <li><strong>Asked By - </strong> Makan Singh </li>
                  </ul>
                </div>
                <div className="answer-box">
                  <p>The plugin is coming as a bonus / free with the theme, users don’t get to have their own purchase codes, but it’s not required, assuming you need it to be able to update the plugin. The option to activate a license was left open for those who already have a license.</p>

                  <p>When you need to update the plugins to the latest version, you just need to Deactivate and Delete the existing plugin and then in your wp-admin panel you will see a notification to install the plugin which you recently removed/deleted. Install and activate that, you are done.
                  </p>
                </div>
              </article>

            </section>
            <aside className="col-lg-3 col-md-3 col-sm-12 faqs-aside-outer">
                <CategoryListComponent />
            </aside>
          </div>
          </div>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default FAQsIndex;
