import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts';
import {connect} from 'react-redux';

let sentimentData = [
  {
    name:"Positive",
    y: 5660,
    color: "#77B232"
  },
  {
    name:"Neutral",
    y: 2550,
    color: "#CFC622"
  },
  {
    name:"Negative",
    y: 1260,
    color: "#FF4B3A"
  }];

class FollwersByAgeGroup extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let AgeGroupChartConfig = {
      chart: {
        type: 'bar',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height:280
      },
      title: {
        text: null
      },
     tooltip: {
     headerFormat: 'Age Group :<small>{point.key}</small><br/>',
     pointFormat: '{series.name}:<b>{point.y}</b>'
    },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      xAxis: {
        categories: ['18-20', '21-35', '35-50', '55-70', '70+'],
          title: {
            enabled: true,
            x:-10,
            text: 'Age Group'
          }
         },
      yAxis: {
        min: 0,
        title: {
            enabled: true,
            text: 'Followers',
            y:10
          }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Male ',
        color: "#00487B",
        data: [440000, 250000, 320000, 350000, 200000]
      }, {
        name: 'Female',
        color: "#BC06A6",
        data: [320000, 190000, 400000, 400000, 100000]
      }]
    };
    return (
       <div className="chart-container">
          <ReactHighcharts config={AgeGroupChartConfig} id="Age-group-chart-container" ></ReactHighcharts>
       </div>
    );
  }
}

export default FollwersByAgeGroup
