import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './dist/style.css';
import Toolbar from '../toolbar/Toolbar';
import Footer from  '../footer/Footer';
import PieChartsImg from '../../static/images/line-basic-default.png'

class ChartGallaryIndex extends Component {

  render() {
    return (
      <div className="main-page-wrraper">
        <Toolbar />
        <main className="page-content-wrapper chart-gallery-page">
            <div className="container">
              <section className="page-headings-wrapper">
                  <h2 className="page-heading">Pie charts</h2>
                  <p>Contains Dynamic Charts also known as Real Time or Live Charts.</p>
                  <hr />
              </section>
              <section className="row row-aligned">
                  <article className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-aligned">
                      <div className="chart-gallery-item">
                        <figure>
                          <img src={PieChartsImg} alt="Pie Chart" />
                          <figcaption>
                            <span>Genrate Charts <i className="fa fa-external-link"></i></span>
                          </figcaption>
                        </figure>
                        <div className="chart-gallery-info">
                          <h3 className="chart-gallery-title">Basic Pie Chart</h3>
                        </div>
                        <NavLink to="/" className="img-hover"></NavLink>
                      </div>
                  </article>
                  <article className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-aligned">
                      <div className="chart-gallery-item">
                        <figure>
                          <img src={PieChartsImg} alt="Pie Chart" />
                          <figcaption>
                            <span>Genrate Charts <i className="fa fa-external-link"></i></span>
                          </figcaption>
                        </figure>
                        <div className="chart-gallery-info">
                          <h3 className="chart-gallery-title">Basic Pie Chart</h3>
                        </div>
                        <NavLink to="/" className="img-hover"></NavLink>
                      </div>
                  </article>
                  <article className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-aligned">
                      <div className="chart-gallery-item">
                        <figure>
                          <img src={PieChartsImg} alt="Pie Chart" />
                          <figcaption>
                            <span>Genrate Charts <i className="fa fa-external-link"></i></span>
                          </figcaption>
                        </figure>
                        <div className="chart-gallery-info">
                          <h3 className="chart-gallery-title">Basic Pie Chart</h3>
                        </div>
                        <NavLink to="/" className="img-hover"></NavLink>
                      </div>
                  </article>
                  <article className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-aligned">
                      <div className="chart-gallery-item">
                        <figure>
                          <img src={PieChartsImg} alt="Pie Chart" />
                          <figcaption>
                            <span>Genrate Charts <i className="fa fa-external-link"></i></span>
                          </figcaption>
                        </figure>
                        <div className="chart-gallery-info">
                          <h3 className="chart-gallery-title">Basic Pie Chart</h3>
                        </div>
                        <NavLink to="/" className="img-hover"></NavLink>
                      </div>
                  </article>
              </section>
            </div>
        </main>
        <Footer/>
      </div>

    );
  }
}
function mapStateToProps(state){
  const {isDrawerOpen} = state.drawer
  return {isDrawerOpen}
}
export default connect(mapStateToProps)(ChartGallaryIndex);
