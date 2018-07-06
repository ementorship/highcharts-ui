import React, { Component } from 'react';
import moment from 'moment';
import './dist/style.css';

class DigitalClock extends Component {
  setTime() {
    const currentTime = moment().utc().format('MMMM, Do YYYY, hh:mm:ss')

    this.setState({
      currentTime: currentTime
    })
  }
  componentWillMount() {
    this.setTime()
  }
  componentDidMount() {
    window.setInterval(function () {
      this.setTime()
    }.bind(this), 1000)
  }
  render() {
    return (
      <div className="digital-clock">
        <p>Current UTC Time</p>
        {this.state.currentTime}
      </div>
    );
  }
}

export default DigitalClock;
