import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts';

class FollwersByLocation extends Component {
  render() {
    let LocationChartConfig = {
    chart: {
        type: 'column',
        height:300
    },
    title: {
        text: null
    },
    legend: {
       enabled: false
   },
    xAxis: {
          categories: [
           'Aguascalientes',
           'Baja California',
           'Campeche',
           'Chiapas',
           'Mexico City'
       ],
        crosshair: true,
        title: {
            text: 'Top 5 States',
            y:10
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Followers',
            x:-10
        }
    },
    tooltip: {
        headerFormat: '<b style="font-size:12px">{point.key}</b><table>',
        pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
        series: [{
          name: "Followers",
          data: [
                   {
                       "name": "Aguascalientes",
                       "y": 6200,
                       "color" :"#1588c1"
                   },
                   {
                       "name": "Baja California",
                       "y": 4057,
                       "color":"#5e9e14"
                   },
                   {
                       "name": "Campeche",
                       "y": 7023,
                       "color":"#b5ac15"
                   },
                   {
                       "name": "Chiapas",
                       "y": 5058,
                       "color":"#ce8316"
                   },
                   {
                       "name": "Mexico City",
                       "y": 4202,
                       "color":"#c41f3b"
                   }
               ]
    }]
};
    return (
       <div className="chart-container chart-by-age">
          <ReactHighcharts config={LocationChartConfig} id="locaion-chart-container" ></ReactHighcharts>
       </div>
    );
  }
}

export default FollwersByLocation
