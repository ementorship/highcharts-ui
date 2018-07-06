import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
import {connect} from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import './dist/style.css';

class PieChartsComponent extends Component {
  constructor(props){
    super(props)
  }

componentDidMount(){

 }

render() {
  console.log(this.props.chartTitleConfig.margin, 'this.props.chartTitleConfig.margin')
  let config = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text:  this.props.chartTitleConfig.text,
        margin : this.props.chartTitleConfig.margin,
        align: this.props.chartTitleConfig.align,
        useHTML : this.props.chartTitleConfig.useHTML,
        verticalAlign : this.props.chartTitleConfig.verticalAlign,
         style :{
         "color": this.props.chartTitleConfig.style.color,
         "fontSize": this.props.chartTitleConfig.style.fontSize + 'px',
         "fontWeight" :this.props.chartTitleConfig.style.fontWeight,
         "fontFamily" :this.props.chartTitleConfig.style.fontFamily
        }
    },
   subtitle: {
        text:  this.props.chartSubTitleConfig.text,
        margin : this.props.chartSubTitleConfig.margin,
        align: this.props.chartSubTitleConfig.align,
        useHTML : this.props.chartSubTitleConfig.useHTML,
        verticalAlign : this.props.chartSubTitleConfig.verticalAlign,
         style :{
         "color": this.props.chartSubTitleConfig.style.color,
         "fontSize": this.props.chartSubTitleConfig.style.fontSize + 'px',
         "fontWeight" :this.props.chartSubTitleConfig.style.fontWeight,
         "fontFamily" :this.props.chartSubTitleConfig.style.fontFamily
        }
    },
    credits :{
      enabled:false
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
        data: this.props.chartData
    }]
  };

    return (
     <div className="chart-container" >
         <div id="PieChartContainer" className="pie-chart-container" > </div>
         <ReactHighcharts config={config}  ref="UpDownChartRefs" id="updown-chart-container" ></ReactHighcharts>
     </div>
    );
  }
}

function mapStateToProps(state){
  const {chartTitleConfig, chartSubTitleConfig, chartData} = state.PieChrtsConfig
  console.log(chartSubTitleConfig, 'chartSubTitleConfig')
  return {chartTitleConfig, chartSubTitleConfig, chartData}
}

export default connect(mapStateToProps)(PieChartsComponent);
