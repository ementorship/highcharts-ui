import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts';
import {connect} from 'react-redux';

let chartWidth= 0;
class TrafficAnalysis extends Component {
  constructor(props){
    super(props)
  }
  refreshChart(){
    const chart = this.refs.TrafficAnalysisChartRefs.getChart();
    console.log(chart.chartWidth, 'print charts')
    chart.reflow();
  }
  componentDidMount(){
    const chart = this.refs.TrafficAnalysisChartRefs.getChart();
    chartWidth = chart.chartWidth;
    console.log(chart.chartWidth, 'componentDidMountrts')

  }

  componentWillReceiveProps(nextProps){
    // const chart = this.refs.TrafficAnalysisChartRefs.getChart();
    // console.log(chart.chartWidth, 'print charts')
    //
    // if(chart.chartWidth !== chartWidth){
    //     chart.reflow();
    //     chartWidth = chart.chartWidth;
    // }

  //   console.log(nextProps, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  //   const self = this
  //   if(nextProps.isDrawerOpen !== this.props. isDrawerOpen){
  //     setTimeout(()=>{
  //       const chart = self.refs.TrafficAnalysisChartRefs.getChart();
  //       chart.reflow();
  //  }, 300);
   //
  //   }
  }

  render() {
    let TrafficAnalysisChartConfig = {
      chart: {
        type: 'bar',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height:300,
        events:{
          redraw: function(){
            console.log('redrwaing')
          }
        }
      },
      title: {
        text: null
      },
     tooltip: {
     headerFormat: '<b>{point.key}</b><br/>',
     pointFormat: '{series.name}:<b>{point.y}%</b>'
    },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      xAxis: {
        categories: ['Twitter', 'Facebook', 'LinkedIn', 'Youtube', 'Instagram', 'Pinterest', 'News Websites']
      },
      yAxis: {
        min: 0,
        title: {
            enabled: false
          }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
            pointWidth: 25,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}%',
                style:{
                  fontWeight:"bold"
                }
            }
        }
      },
      series: [{
        name: 'Visitors ',
        data: [
                 {
                     "name": "Twitter",
                     "y": 30,
                     "color" :"#59ADEA"
                 },
                 {
                     "name": "Facebook",
                     "y": 26,
                     "color":"#3B5998"
                 },
                 {
                     "name": "LinkedIn",
                     "y": 13,
                     "color":"#0077B5"
                 },
                 {
                     "name": "Youtube",
                     "y": 10,
                     "color":"#E02A20"
                 },
                 {
                     "name": "Instagram",
                     "y": 7,
                     "color":"#B034A6"
                 },
                 {
                     "name": "Pinterest",
                     "y": 5,
                     "color":"#BD081C"
                 },
                 {
                     "name": "News Websites",
                     "y": 9,
                     "color":"#6a9ec9"
                 }
             ]
      }]
    };
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Traffic Analysis<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container analysis-outer" >
          <ReactHighcharts config={TrafficAnalysisChartConfig} ref="TrafficAnalysisChartRefs" id="Age-group-chart-container" ></ReactHighcharts>
            <h3 className="charts-footer-heading">Most Active Social Media</h3>
       </div>
      </section>
    );
  }
}

function mapStateToProps(state){
  const {isDrawerOpen} = state.drawer
  console.log(isDrawerOpen,'isDrawerOpen>>>>>>>>>>')
  return {isDrawerOpen}
}

export default connect(mapStateToProps)(TrafficAnalysis);
