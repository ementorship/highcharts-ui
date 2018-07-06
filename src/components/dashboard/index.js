import React, { Component } from 'react';
import DrawerComponents from '../drawer/Drawer';
import TrendAnalysis from './trend-analysis/TrendAnalysis';
import EngagementRate from './engagement-rate/EngagementRate';
import BuzzWord from './buzz-word/BuzzWord';
import TopPositives from './posts/TopPositives';
import TopNegatives from './posts/TopNegatives';
import TopPost from './posts/TopPost';
import SocialMediaStats from './social-media-stats/MediaStats';
import SentimentAnalysis from './overview/SentimentAnalysis';
import TrafficAnalysis from './overview/TrafficAnalysis';
import ContentAnalysis from './overview/ContentAnalysis';
import PostAnalysis from './post-analysis/PostAnalysis';
import AudienceProfileAnalysis from './overview/AudienceProfileAnalysis';
import FollwersByAgeGroup from './overview/FollwersByAge';
import DashboardBreadcrumbs from './DashboardBreadcrumbs';
import OverviewFilters from './filters/OverviewFilters';
import SocialMediaAnalysis from './social-media-analysis/SocialMediaAnalysis';
import LocationMap from './location-map/LocationMap';
import ConfidenceLevel from './confidence-level/ConfidenceLevel';
import TreeMapChart from './tree-map/TreeMap';
import './dist/style.css';

class DashboardIndex extends Component {
  componentDidMount(){

  }

  render() {
    return (
      <div className="app-outer">
        <DrawerComponents/>
        <div className="dashboard-body-wrapper">

        <div className="mdc-layout-grid-row">
          <div className="mdc-layout-grid mdc-col-12">
            <div className="dashboard-header">
              <div className="mdc-layout-grid-row">
                <div className="mdc-layout-grid mdc-col-5">
                    <DashboardBreadcrumbs />
                </div>
                <div className="mdc-layout-grid mdc-col-7">
                    <OverviewFilters />
                </div>
             </div>
            </div>
          </div>
        </div>

      {/*  <div className="mdc-layout-grid-row">
          <div className="mdc-layout-grid mdc-col-12">
              <SocialMediaStats />
          </div>
       </div>*/}
       <div className="mdc-layout-grid-row">
         <div className="mdc-layout-grid mdc-col-8">
           <SocialMediaAnalysis />
         </div>
         <div className="mdc-layout-grid mdc-col-4">
           <TopPost />
         </div>
      </div>
            <div className="mdc-layout-grid-row">
              <div className="mdc-layout-grid mdc-col-12">
                <AudienceProfileAnalysis />
              </div>
           </div>

            <div className="mdc-layout-grid-row">
              <div className="mdc-layout-grid mdc-col-6">
                  <SentimentAnalysis />
              </div>
              <div className="mdc-layout-grid mdc-col-6">
                <TrafficAnalysis  handleResize={this.props.handleResize}/>
              </div>
           </div>
           <div className="mdc-layout-grid-row">
             <div className="mdc-layout-grid mdc-col-6">
                 <ContentAnalysis />
             </div>
             <div className="mdc-layout-grid mdc-col-6">
              <EngagementRate />
             </div>
          </div>

          <div className="mdc-layout-grid-row">
            <div className="mdc-layout-grid mdc-col-8">
                <TrendAnalysis />
            </div>
            <div className="mdc-layout-grid mdc-col-4">
             <BuzzWord />
            </div>
          </div>
          <div className="mdc-layout-grid-row">
            <div className="mdc-layout-grid mdc-col-12">
                <TreeMapChart />
            </div>
          </div>

            <div className="mdc-layout-grid-row">
              <div className="mdc-layout-grid mdc-col-3">
                  <TopPositives />
              </div>
              <div className="mdc-layout-grid mdc-col-3">
                <TopNegatives />
              </div>
              <div className="mdc-layout-grid mdc-col-6">
                <PostAnalysis />
              </div>
            </div>

            <div className="mdc-layout-grid-row">
              <div className="mdc-layout-grid mdc-col-6">
                  <LocationMap />
              </div>
              <div className="mdc-layout-grid mdc-col-6">
                <ConfidenceLevel />
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default DashboardIndex;
