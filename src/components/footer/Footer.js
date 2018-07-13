import React, { Component } from 'react';
import './dist/style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-sec">
        <section className="footer-bottom-section">
            <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="copyright-section animated fadeInUp">
                      <p> © 2018 — HighCharts UI. All rights reserved.</p>
                      <a href="#"> Privacy Policy</a>
                      <span className="divider">|</span>
                      <a href="#"> Terms &amp; Conditions</a>
                    </div>
                  </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                  <div className="footer-social-media animated fadeInUp">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </footer>
    );
  }
}

export default Footer;
