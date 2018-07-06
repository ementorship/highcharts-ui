import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
import './dist/style.css';
import {connect} from 'react-redux';
import sortJsonArray from 'sort-json-array';
import colors from './dist/color.json';
require('highcharts/modules/treemap.src.js')(Highcharts)
require('highcharts/modules/drilldown.js')(Highcharts)
require('highcharts/modules/no-data-to-display.js')(Highcharts)

class TreeMapChart extends Component {
  constructor(props){
    super(props)
    this.state={
      indicatorStatus:"show"
    }
  }

  componentDidMount() {
      let headline = [],
        article = [],
        allData =[],
        allArticles = [];

         if(this.props.TreeMapData.length !== 0)
         {
          allArticles = sortJsonArray(this.props.TreeMapData, 'date', 'des');
          for(let i in allArticles)
          {
            headline.push({id:'Headline-'+i, headline : allArticles[i]['headline'], date: allArticles[i]['date'],  drilldown:'HeadlineDrill-'+i, value:allArticles[i]['probability_new'], sortIndex: i, color:colors[i]});

            article.push({
              id:'HeadlineDrill-'+i,
              data: [{
                id: 'article-'+i,
                article: allArticles[i]['article'],
                headline : allArticles[i]['headline'],
                date: allArticles[i]['date'],
                value: allArticles[i]['probability_new'],
                url : allArticles[i]['url']
              }],
              dataLabels: {
                  enabled: true,
                  useHTML : true,
                  format: '<span><b>Date : </b> {point.date} <br/> <a href={point.url} class="article-link" target="_blank"><b>Headline : </b> {point.headline}</a> </br><b>Article : </b>{point.article}</span>',
                  align: 'left',
                  verticalAlign: 'top',
                  className : 'article-details' ,
                  style:{
                    fontSize : '15px',
                    color : "#ffffff",
                    fontWeight: 'normal',
                    lineHeight:'1.4'
                  },
                  x: 10,
                  y: 5
              },
              borderWidth: 1,
              borderColor : "#fff",
              tooltip :{
                pointFormat : '<span><b>Date : </b> {point.date}<br/> <b>Headline : </b>{point.headline}</span>'
              },
              states: {
                  hover: {
                      enabled: false
                  }
                }
            });
          }
        }
        console.log(headline, article, 'finally');
        // charts config file start here

        Highcharts.chart('treemap-container', {
              chart: {
                  type: 'treemap',
                  spacingTop : 50,
                  spacingBottom :0,
                  height:600,
                  duration: 600,
                  style: {
                    fontFamily: 'Roboto, sans-serif'
                  }
              },
              title :{
                text : ""
              },
              lang: {
                 drillUpText: '<span>Go Back To {series.name}</span>',
                 noData: "No article Found!"
              },
              noData :{
                style:{
                  color:"#ffffff",
                  fontSize : "18px"
                }
              },
              tooltip: {
              borderWidth: 1,
              padding:2,
              borderRadius: 3,
              useHTML :true,
              shadow: false,
              backgroundColor:"rgba(255,255,255,0.9)",
              padding: 10,
              style:{
                fontSize : '16px',
                color:"#333333",
                lineHeight:"25px"
            }
            },
             exporting: { enabled: false },
             credits: { enabled: false },
              series: [{
                name: 'News Articles',
                tooltip :{
                  useHTML :true,
                  pointFormat : '<span style="font-weight:normal;"><b>Headline :</b> {point.headline}.<br/> <b>Date : </b> {point.date}<br/> <b> Score : </b> {point.value}</span>'
                },
                layoutAlgorithm: 'strip',
                levelIsConstant: true,
                levels: [{
                    level: 1,
                    dataLabels: {
                        enabled: true,
                        padding:5,
                        useHTML:true,
                        crop : false,
                        overflow : "none",
                        allowOverlap : true,
                        format: '<span> <b>Date :</b> {point.date} <br/><b>Headline : </b> {point.headline}</span>',
                        align: 'left',
                        overflow : 'none',
                        verticalAlign: 'top',
                        style:{
                          fontSize : '14px',
                          color : "#ffffff",
                          fontWeight: 'normal',
                          fontStyle:'normal'
                      }
                    },
                    borderWidth: 2,
                    borderColor : "#fff"
                }],
                 data:headline,
                 events: {
         					click: function(e){

                  }
         				}
              }],
           drilldown: {
               activeDataLabelStyle: {
                 fontStyle: 'italic',
                 color: "#ffffff",
                 textDecoration: 'none',
                 fontWeight :'normal'
               },
               drillUpButton: {
                    useHTMl : true,
                    relativeTo: 'spacingBox',
                    position: {
                        y: -40,
                        x: 0
                    },
                   theme: {
                      fill: '#eee',
                      'stroke-width': 1,
                      stroke: '#eee',
                      r: 2,
                      height: 20,
                      states: {
                          hover: {
                              fill: '#f2f2f2'
                          }
                      }
                    }
                 },
                  series: article
                  }
            });
    }

  render() {
    return (
      <section className="charts-outer">
         <div className="chart-header">
            <h4>Top 20 Latest Post</h4>
         </div>
         <div className="chart-container tree-map-outer" >
          <div id="treemap-container" style={{height:"600px"}} className="article-detailshighcharts-tracker" > </div>
       </div>
      </section>
    );
}
}

function mapStateToProps(state) {
    const { loading, TreeMapData } = state.GetTreeMapData;
    return {loading, TreeMapData};
}

export default connect(mapStateToProps)(TreeMapChart);
