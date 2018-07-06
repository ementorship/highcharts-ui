import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ChartsGettingStarted extends Component {

 render() {
    return (
    <div className="chart-config-creater chart-getting-started">
        <h4 className="form-h4">Getting Started</h4>
        <p>Highcharts UI helps you to genrate and create the attractive flexible charts using the
        Highcharts Libarary with the graphical interface.</p>
        <p>You do not require any coding and hioghchart knowlage to builds highlavel of  HIghcharts charts,
        just select and add your data and view your output.</p>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ChartsGettingStarted);
