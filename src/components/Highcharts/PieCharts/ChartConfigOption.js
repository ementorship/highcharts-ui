import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
import {connect} from 'react-redux';

class PieChartsComponent extends Component {
  constructor(props){
    super(props)
  }

componentDidMount(){

}
componentRecievePorps(nextPropps){
    console.log(nextPropps, 'nextPropps')
    Highcharts.setOptions({
      colors: ['#b2a80a', '#6791b5' ,'#1990CE','#E52F25']
  });

  Highcharts.chart('PieChartContainer', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser Popularity in 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});
}
 render() {
    return (
     <div className="chart-container" >
         <div id="PieChartContainer" className="pie-chart-container" > </div>
     </div>
    );
  }
}

function mapStateToProps(state){
  const {isDrawerOpen} = state.drawer
  return {isDrawerOpen}
}

export default connect(mapStateToProps)(PieChartsComponent);
