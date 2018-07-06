import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HighchartsPieGenerator from './components/Highcharts/PieCharts/Index';

class RouteComponents extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                  <Switch>
                    <Route path="/pie-chart" component={HighchartsPieGenerator} />
                    <Route path="/" component={HighchartsPieGenerator} />
                  </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default RouteComponents;
