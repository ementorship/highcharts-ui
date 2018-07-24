import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HighchartsPieGenerator from './components/Highcharts/PieCharts/Index';
import ChartGalleryIndex from './components/ChartGallery/Index';
import AboutIndex from './components/about/Index';
import HomeIndex from './components/homepage/Index';
import FAQsIndex from './components/FAQs/Index';
import ContactIndex from './components/Contact/Index';

class RouteComponents extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                  <Switch>
                    <Route path="/about-us" component={AboutIndex} />
                    <Route path="/faqs/highcharts-errors" component={FAQsIndex} />
                    <Route path="/contact-us" component={ContactIndex} />
                    <Route path="/pie-chart" component={HighchartsPieGenerator} />
                    <Route path="/chart-gallery" component={ChartGalleryIndex} />
                    <Route path="/" component={HomeIndex} />

                  </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default RouteComponents;
