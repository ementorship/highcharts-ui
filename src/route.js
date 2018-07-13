import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HighchartsPieGenerator from './components/Highcharts/PieCharts/Index';
import ChartGalleryIndex from './components/ChartGallery/Index';
import AboutIndex from './components/about/Index'
class RouteComponents extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                  <Switch>
                    <Route path="/about-us" component={AboutIndex} />
                    <Route path="/pie-chart" component={HighchartsPieGenerator} />
                    <Route path="/chart-gallery" component={ChartGalleryIndex} />
                    <Route path="/" component={HighchartsPieGenerator} />

                  </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default RouteComponents;
