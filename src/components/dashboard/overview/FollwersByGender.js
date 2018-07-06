import React, { Component } from 'react';
import FemaleIcon from './dist/female.png';
import MaleIcon from './dist/male.png';

class FollwersByGender extends Component {
  render() {
    return (
       <div className="chart-container chart-by-gender">
          <div className="gender-group">
            <div className="gender-item">
              <img src={FemaleIcon} alt="Female" />
              <strong>33%</strong>
            </div>
          <div className="gender-item">
            <img src={MaleIcon} alt="Male" />
            <strong>67%</strong>
          </div>
       </div>
      </div>
    );
  }
}

export default FollwersByGender
