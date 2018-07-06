import React, { Component } from 'react';
import './dist/style.css';
import {connect} from 'react-redux';
import ChartsGettingStarted from './GettingStarted';
import ChartTitleConfig from './ChartTitleConfig';
import ChartSubTitleConfig from './ChartSubTitleConfig';
import PieChartsComponent from './PieChartConfig';
import {GetConfigActiveTabName} from '../../../actions/ConfigFilesActions';

class HighchartsPieGenerator extends Component {
  componentDidMount(){

  }
  handleCongigTab(activeTab){
    this.props.dispatch(GetConfigActiveTabName(activeTab))
  }
  render() {
    return (
      <div className="app-outer highcharts-generators">
        <div className="header">
        <h1>header sec</h1>
        </div>
        <main>
          <div className="container">
            <article className="chart-genrator-outer">
              <header className="chart-genrator-header">
                <h1>Higcharts : Pie Chart Generator</h1>
              </header>
              <div className="chart-genrator-input-box">
               <aside className="charts-properties-list">
                  <div className="chart-option-wrapper">
                  <ul>
                    <li><span className={"tab-link " + (this.props.ActiveConfigTab === "GettingStarted" ? "active" : "") }  onClick={ (e) => this.handleCongigTab('GettingStarted')}>Getting Started</span></li>
                    <li><span className={"tab-link " + (this.props.ActiveConfigTab === "ChartSize" ? "active" : "")} onClick={ (e) => this.handleCongigTab('ChartSize')}>Size</span></li>
                    <li><span className={"tab-link " + (this.props.ActiveConfigTab === "ChartTitle" ? "active" : "")} onClick={ (e) => this.handleCongigTab('ChartTitle')}>Title</span></li>
                    <li><span className={"tab-link " + (this.props.ActiveConfigTab === "ChartSubTitle" ? "active" : "")} onClick={ (e) => this.handleCongigTab('ChartSubTitle')}>Sub Title</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Labels</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Tooltips</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Colors</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Legands</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Axis</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Hover</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Margin</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Padding</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Radious</span></li>
                    <li><span className="tab-link" onClick={ (e) => this.handleCongigTab('GettingStarted')}>Generate</span></li>
                  </ul>
                  </div>
              </aside>
              <section className="charts-properties-config">
                {this.props.ActiveConfigTab === "GettingStarted" ? (<ChartsGettingStarted />) : '' }
                {this.props.ActiveConfigTab === "ChartTitle" ? (<ChartTitleConfig />) : '' }
                {this.props.ActiveConfigTab === "ChartSubTitle" ? (<ChartSubTitleConfig />) : '' }
              </section>
              </div>
              <section className="chart-genrator-output">
                  <PieChartsComponent/>
              </section>
            </article>
          </div>
       </main>
       <div className="footer">
         <h1>footer</h1>
       </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  const {ActiveConfigTab} = state.ConfigFileReducers
  console.log(ActiveConfigTab, 'ActiveConfigTab')
  return {ActiveConfigTab}
}

export default connect(mapStateToProps)(HighchartsPieGenerator);
