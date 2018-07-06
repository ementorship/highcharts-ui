import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
require('highcharts/highcharts-more.js')(Highcharts)
require('highcharts/modules/solid-gauge.js')(Highcharts)
import './dist/style.css';

class ConfidenceLevel extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    Highcharts.chart('confidence-level-container',   {
        chart: {
         type: 'solidgauge',
         height: 370
     },
     title: null,
     pane: {
         center: ['50%', '85%'],
         size: '150%',
         startAngle: -90,
         endAngle: 90,
         background: {
             backgroundColor:'#f4f6f7',
             innerRadius: '60%',
             outerRadius: '100%',
             shape: 'arc'
         }
     },

     tooltip: {
         enabled: false
     },
       credits: {
         enabled: false
     },


     // the value axis
     yAxis: {
         stops: [
             [0.1, '#7cbc32'] // green
         ],
         lineWidth:6,
         minorTickInterval: null,
         tickAmount: 1,
         labels: {
          y: 40,
          style: {
              fontSize:"20px"
          }
        },
        min: 0,
        max: 100,
     },

       plotOptions: {
           solidgauge: {
               dataLabels: {
                   y: -10,
                   borderWidth: 0,
                   useHTML: true,
                   format: 'gdfgdfg %' ,
                      enabled: true,
               }
           }
       },
         series: [{
         name: 'Speed',
         data: [70],
         dataLabels: {
             format: '<div style="text-align:center"><span style="font-size:30px;color:#7CBC32">Confidence</span><br/>' +
                    '<span style="font-size:30px;color:#7CBC32">Level</span></div>'
         }
     }]

 });
  }

  render() {
let positive = {
  color : "#7cbc32",
  width :'70%',
  borderColor: "#7cbc32"
}
let negative = {
  color : "#ff0000",
  width: "30%",
  borderColor: "#ff0000"
}



    // console.log(this.props.candleData.length, 'get data')
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Confidence Level</h4>
         </div>
         <div className="chart-container" >
          <div ref="ConfidenceLevelConfigRefs" id="confidence-level-container" ></div>
          <div className="confidence-level-indecator">
            <ul>
              <li style={positive} >
                <strong>70%</strong>
                <p>positive</p>
              </li>
              <li style={negative}>
              <strong>30%</strong>
              <p>negative</p>
              </li>
            </ul>
          </div>
         </div>
      </section>
    );
  }
}

export default ConfidenceLevel
