import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
import {connect} from 'react-redux';
require('highcharts/modules/variable-pie.js')(Highcharts)

let chartWidth= 0;
class ContentAnalysis extends Component {
  constructor(props){
    super(props)
  }

componentDidMount(){
  Highcharts.setOptions({
      colors: ['#b2a80a', '#6791b5' ,'#1990CE','#E52F25']
  });

  Highcharts.chart('contentChartContainer', {
    chart: {
      type: 'variablepie'
    },
    title: {
      text: 'Content Analysis'
    },
    tooltip: {
      headerFormat: '',
     pointFormat: '<b>{point.percentage:.0f}%<br/>',
    },
    credits : {
      enabled:false
    },
    exports:{
      enabled: false
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'Source',
      data: [{
        name: 'Video',
        y: 4053700,
        z: 91
      }, {
        name: 'Text',
        y: 1751500,
        z: 118.7
      }, {
        name: 'Link',
        y: 1526850,
        z: 202.6
      }, {
        name: 'Image',
        y: 1588670,
        z: 235.5
      }]
    }]
  });
}
  render() {
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Content Analysis<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container analysis-outer" >
         <div id="contentChartContainer" className="content-chart-container" > </div>
         </div>
      </section>
    );
  }
}

function mapStateToProps(state){
  const {isDrawerOpen} = state.drawer
  return {isDrawerOpen}
}

export default connect(mapStateToProps)(ContentAnalysis);
