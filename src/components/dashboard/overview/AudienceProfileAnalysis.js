import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts';
import {connect} from 'react-redux';
import FollwersByAgeGroup from './FollwersByAge';
import FollwersByGender from './FollwersByGender';
import FollwersByLocation from './FollwersByLocation';
import './dist/style.css';

class AudienceProfileAnalysis extends Component {
  constructor(props){
    super(props)
  }

  
  render() {
    return (
      <section className="charts-outer">
           <div className="chart-header">
            <h4>Audience Profile Analysis <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>

           </div>
         <div className="chart-container analysis-outer" >
            <div className="chart-innner-container">
              <div className="mdc-layout-grid-row">
                <div className="mdc-layout-grid mdc-col-3">
                  <div className="chart-inner-box">
                      <FollwersByGender />
                      <h3>Followers By Gender </h3>
                  </div>
                </div>
                <div className="mdc-layout-grid mdc-col-4">
                  <div className="chart-inner-box">
                    <FollwersByAgeGroup />
                    <h3>Followers By Age Group </h3>
                  </div>
                </div>
                  <div className="mdc-layout-grid mdc-col-5">
                    <div className="chart-inner-box">
                    <FollwersByLocation />
                    <h3>Followers By Location </h3>
                  </div>
                </div>
             </div>
            </div>
            </div>
        </section>
    );
  }
}

export default AudienceProfileAnalysis
