import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock';
import { Icon } from 'react-mdc-web';
import {connect} from 'react-redux';
import SocialMediaLikes from './dist/likesData.json';
import SocialMediaViews from './dist/viewsData.json';
import SocialMediaComments from './dist/commentsData.json';

class SocialMediaAnalysis extends Component {
  constructor(props){
    super(props)
  }


  render() {

    let  allSocialMedia =[];
    for (let i=0; i < SocialMediaLikes.length; i += 1) {
        allSocialMedia.push([
            SocialMediaLikes[i][0] ,
            ((SocialMediaLikes[i][1])+(Math.random() *2 ))
        ])
    }

    let SocialMediaAnalysisConfig =
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
           enabled : true,
           layout: 'horizontal',
           align: 'center',
           verticalAlign: 'top',
           itemMarginTop: 15,
           itemMarginBottom: 50
       },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [{
      name: 'All',
      data: allSocialMedia ,
      color:"#59ADEA"
    }, {
      name: 'Likes',
      data: SocialMediaLikes,
      color:"#3B5998"
    }, {
      name: 'Comments',
      data: SocialMediaComments,
      color:"#E02A20"
    }, {
      name: 'Views',
      data: SocialMediaViews,
      color:"#90D046"
    }]
  }

    // console.log(this.props.candleData.length, 'get data')
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Social Media Analytics <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
         <div className="chart-container" >
          <ReactHighcharts config={SocialMediaAnalysisConfig} ref="SocialMediaAnalysisChartRefs" id="social-midia-analysis-chart-container" ></ReactHighcharts>
         </div>
      </section>
    );
  }
}

export default SocialMediaAnalysis
