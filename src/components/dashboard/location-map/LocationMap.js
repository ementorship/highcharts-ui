import React, { Component } from 'react';
import Highcharts from 'highcharts/highmaps';
import { Icon } from 'react-mdc-web';
import {connect} from 'react-redux';
import data from './dist/data.json';
import './dist/style.css';
require('./dist/mx-all.js')

class LocationMap extends Component {
  constructor(props){
    super(props)
  }
componentDidMount(){
    Highcharts.mapChart('location-map-container', {
          	  chart: {
              reflow: false
          },
          chart: {
              map: 'countries/mx/mx-all',
              height:500
          },
          title: {
              text: null
          },
         credits: {
              enabled: false
          },
          exports: {
               enabled: false
           },
          mapNavigation: {
              enabled: true,
              enableDoubleClickZoomTo: true,

              buttonOptions: {
              	theme: {
                          fill: 'white',
                          'stroke-width': 1,
                          stroke: '#012051',
                          r: 1,
                          states: {
                              hover: {
                                  fill: '#e0e0fc'
                              },
                              select: {
                                  stroke: '#012051',
                                  fill: '#012051'
                              }
                          }
                      },
                  verticalAlign: 'top',
                  align:'right'

              }
          },
          yAxis: {
          minRange: 3000
        },

          colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#dddddd',
            maxColor: '#434343',
            stops: [
              [0, '#e0e0fc'],
              [0.65, '#4e79ce'],
              [1, '#0d3c87']
            ]
          },

          series: [{
              data: data,
              name: 'Popularity',
              states: {
                  hover: {
                      color: '#90D046'
                  }
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style :{
                  fontSize:"12",
                  fontFamily:"'Roboto', sans-serif"
                  },

              }
          }]
      });
}

  render() {

    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Top Most Popular Locations <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container" >
          <div id="location-map-container" className="location-map-container" ></div>
         </div>
      </section>
    );
  }
}

export default LocationMap
