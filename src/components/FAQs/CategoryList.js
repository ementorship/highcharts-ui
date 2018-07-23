import React, { Component } from 'react';

class CategoryListComponent extends Component {
  render() {
    return (
      <div className="category-list-wrapper">
        <h3 className="side-bar-heading">Topics </h3>
        <ul>
          <li><span className="category-links active">HighCharts Errors</span></li>
          <li><span className="category-links">HighCharts Legands</span></li>
          <li><span className="category-links">HighCharts Tooltip</span></li>
          <li><span className="category-links">HighCharts DataLabels</span></li>
          <li><span className="category-links">HighCharts Exports</span></li>
          <li><span className="category-links">HighCharts Credits</span></li>
        </ul>
      </div>
    );
  }
}

export default CategoryListComponent;
