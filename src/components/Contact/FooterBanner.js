import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class FooterBanner extends Component {
  render() {
    return (
      <section className="footer-banner-section">
      <div className="container">
        <div className="footer-banner-outer">
          <h2>Still have Questions ? Ask Us? </h2>
          <p>If you still have Question related to Chart UI, Data Visualization, Deisgn , Highcharts, JavaScript and more,
          Feel free to ask. We will revert back you in while.</p>
            <NavLink to="/ask-question" className="btn ">Ask to Chart UI</NavLink>
        </div>
      </div>
      </section>
    );
  }
}

export default FooterBanner;
