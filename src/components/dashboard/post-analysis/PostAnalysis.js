import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock';
import { Icon } from 'react-mdc-web';
import {connect} from 'react-redux';
import PostAnalysisData from './dist/likesData.json';

class PostAnalysis extends Component {
  constructor(props){
    super(props)
  }

  render() {

    let PostAnalysisConfig =
    {
      chart: {
       spacingBottom: 10,
       spacingTop: 10,
       spacingLeft: 10,
       spacingRight: 10,
       height:380
     },
      title: {
      text: null
    },

    xAxis: {
        gridLineWidth: 1
      },
      yAxis: {
        gridLineWidth: 1
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      legend: {
           enabled : false
       },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2018
      }
    },

    series: [{
      name: 'Post Analysis',
      data: PostAnalysisData ,
      color:"#90D046"
    }]
  }

    // console.log(this.props.candleData.length, 'get data')
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Post Analysis <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container" >
          <ReactHighcharts config={PostAnalysisConfig} ref="PostAnalysisChartRefs" id="post-analysis-chart-container" ></ReactHighcharts>
         </div>
      </section>
    );
  }
}

export default PostAnalysis
