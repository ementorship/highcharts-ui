import React, { Component } from 'react';
import Highcharts from 'highcharts/highcharts';
import './dist/style.css';
import {connect} from 'react-redux';
import sortJsonArray from 'sort-json-array';
import gradient from 'gradient-color'

require('highcharts/modules/treemap.src.js')(Highcharts)
require('highcharts/modules/drilldown.js')(Highcharts)
require('highcharts/modules/no-data-to-display.js')(Highcharts)

let articlesLength = 0;
let shadeWidth ={
  width: 0
};
let colorLightRecent, colorDarkOld ;

class TreeMapChart extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

    Highcharts.chart('treemap-container', {
       chart: {
              type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true
            },
            title: {
                text: 'DrillUp button styling'
            },
        series: [{
            data: [{
                id: 'A',
                name: 'Apples',
                color: "#EC2500",
                value : 4,
                drilldown: 'A1'
            }, {
                id: 'B',
                name: 'Bananas',
                color: "#ECE100",
                value : 3,
                drilldown :'B1'
            }, {
                id: 'O',
                name: 'Oranges',
                color: '#EC9800',
                value : 8
            }]
        }],
         drilldown: {
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        y: 0,
                        x: 0
                    },
                    theme: {
                        fill: 'white',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: '#bada55'
                            },
                            select: {
                                stroke: '#039',
                                fill: '#bada55'
                            }
                        }
                    }

                },
                series: [{
                    id: 'A1',
                    data: [{
                      id: 'AA1',
                      name: 'gjdfg dfgjhd gkd g',
                      color: '#EC9800',
                      value :4
                  }]
                },{
                    id: 'B1',
                    data: [{
                      id: 'AA1',
                      name: 'B! B1 dfgjhd gkd g',
                      color: '#EC9800',
                      value :4
                  }]
                }]
            }
    });


    }

  render() {

    return (
      <section className="charts-outer">
       <div className="chart-header ">
        <h4>Article</h4>
          <div className="toggle-button">
            <div className="react-select-filter">
              <label>Source : </label>
            </div>
          </div>
       </div>
       <div className="tree-map-chart-container" >
          <div id="treemap-container" className="article-detailshighcharts-tracker" > </div>
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
