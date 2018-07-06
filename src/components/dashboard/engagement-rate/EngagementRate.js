import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock';
import { Icon } from 'react-mdc-web';
import {connect} from 'react-redux';
import data from './dist/data.json';


class EngagementRate extends Component {
  constructor(props){
    super(props)
  }


  render() {
let volume = [],
      dataLength = data.length,
      lineData =[],
      i = 0;

  for (i; i < dataLength; i += 1) {
      lineData.push([
              data[i][0],
          data[i][1]
      ])
      volume.push([
          data[i][0], // the date
          data[i][5] // the volume
      ]);
  }
    let engagementRateConfig =
    {
       rangeSelector: {
            selected: 1
        },

        title: {
            text: ''
        },

        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],

        tooltip: {
            split: true
        },

        series: [{
            type: 'spline',
            name: 'AAPL',
            data: lineData
        }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1
        }]
    };

    // console.log(this.props.candleData.length, 'get data')
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Engagement Rate Analysis <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container" >
          <ReactHighcharts config={engagementRateConfig} ref="candleStickChartRefs" id="engagement-hart-container" ></ReactHighcharts>
         </div>
      </section>
    );
  }
}

export default EngagementRate
