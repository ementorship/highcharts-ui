import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';
import CategoryListComponent from'./CategoryList';

class HighchartsErrors extends Component {
  render() {
    return (
      <div className="faq-article-wrapper">
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
      </div>
    );
  }
}

export default HighchartsErrors;
