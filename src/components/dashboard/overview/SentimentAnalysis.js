import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighcharts';
import {connect} from 'react-redux';
import Loader from 'react-loader-advanced';
import LoaderIcon from '../../loader/loader';
import {fetchSentimentAnalysisData} from '../../../actions/SentimentAnalysisActions';
import './dist/style.css';

require('highcharts/modules/no-data-to-display.js')(ReactHighcharts.Highcharts)
const loader = <LoaderIcon />;

let SentimentColors = ["#77B72D", "#F94339", "#afa82f" ]
class SentimentAnalysis extends Component {
  constructor(props){
    super(props)
  }
componentDidMount(){
  this.props.dispatch(fetchSentimentAnalysisData(this.props.SelectedPoliticianName))
}

  render() {
    console.log(this.props.SentimentChartData, "this.props.SentimentChartData");
    let sentimentData = this.props.SentimentChartData,
        sentimentDataUpdated = [];

        for(let i=0; i<sentimentData.length; i++){
          console.log(sentimentData[i].count, 'for loop')
              sentimentDataUpdated.push({"name":sentimentData[i].name , "y": sentimentData[i].count, "color" : SentimentColors[i] });
        }

        console.log(sentimentDataUpdated, 'sentimentDataUpdatedupdated')
    let SentimentChartConfig = {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',
              height:280,
              marginLeft:0,
              marginRight:0,
              padding:0,
              colors: SentimentColors
          },
          title: {
              text: ''
          },
          tooltip: {
            useHTML :true,
              headerFormat: '<b >{series.name}</b> </br>',
              pointFormat: '<b style="color:{point.color}; text-transform:capitalize;" >{point.name}: </b> <b>{point.y}</b>'
          },
          credits:{
            enabled:false
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.percentage:.2f}</b> %',
                      style:{
                        fontSize:"14px",
                        textOutline:"1px"
                      }
                    },
                  innerSize: "50%"
              }
          },
          series: [{
              name: 'Sentiment Score',
              colorByPoint: true,
              data: sentimentDataUpdated
          }]
      };

      let allCount = 0;
      for(let i in sentimentDataUpdated){
        allCount= allCount+sentimentDataUpdated[i].y;
      }
    return (
      <section className="charts-outer">
         <div className="chart-header">
          <h4>Sentiment Analysis <a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h4>
         </div>
             <Loader show={this.props.loading} message={loader} disableDefaultStyles={false}>
               <div className="chart-container analysis-outer" >
                  <ReactHighcharts config={SentimentChartConfig} ref="SentimentChartRefs" id="sentiment-chart-container" ></ReactHighcharts>
                  {sentimentDataUpdated.length !==0 ?
                    <div className="sentiment-overview">
                      <ul>
                      <li>
                       <span>All Count</span>
                       <strong>{allCount}</strong>
                     </li>
                    {sentimentDataUpdated.map((sentmentCount, index) =>
                        <li key={index} style={{color:sentmentCount.color }}>
                          <span>{sentmentCount.name}</span>
                          <strong>{sentmentCount.y}</strong>
                        </li>
                    )}
                    </ul>
                  </div>
                : ''}
               </div>
             </Loader>
      </section>
    );
  }
}

function mapStateToProps(state){
  const {loading, SentimentChartData} = state.SentimentAnalysisData
  const {SelectedPoliticianName} = state.PoliticianNameData
  return {loading, SentimentChartData, SelectedPoliticianName}
}

export default connect(mapStateToProps)(SentimentAnalysis);
