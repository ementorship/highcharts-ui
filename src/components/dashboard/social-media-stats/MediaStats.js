import React, { Component } from 'react';
import { Icon } from 'react-mdc-web';
import {connect} from 'react-redux';
import './dist/style.css';

class SocialMediaStats extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className="charts-outer social-media-stats">
         <div className="chart-header">
          <h4>Social Media Stats</h4>
         </div>
         <div className="chart-container" >
            <div className="media-stats-outer">
              <div className="media-stats-item">
                <div className="media-stats-header">
                    <h3>Twitter<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                  </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#59ADEA"}}>
                    <li>
                      <h3>16952</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>14452</h3>
                      <span>Tweet</span>
                    </li>
                    <li>
                      <h3>1952</h3>
                      <span>Retweet</span>
                    </li>
                    <li>
                      <h3>760</h3>
                      <span>Favorites</span>
                    </li>
                    <i className="fa fa-twitter"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>Facebook<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#3B5998"}}>
                    <li>
                      <h3>46952</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>334452</h3>
                      <span>Post Reach</span>
                    </li>
                    <li>
                      <h3>2152</h3>
                      <span>Intraction</span>
                    </li>
                    <li>
                      <h3>765670</h3>
                      <span>Impression</span>
                    </li>
                      <i className="fa fa-facebook"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>LinkedIn<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#0077B5"}}>
                    <li>
                      <h3>16952</h3>
                      <span>Followers</span>
                    </li>
                    <li>
                      <h3>9834</h3>
                      <span>Clicks</span>
                    </li>
                    <li>
                      <h3>184530</h3>
                      <span>Impression</span>
                    </li>
                    <li>
                      <h3>4560</h3>
                      <span>Likes</span>
                    </li>
                    <i className="fa fa-linkedin"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>Youtube<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#E02A20"}}>
                    <li>
                      <h3>215572</h3>
                      <span>Subscribers</span>
                    </li>
                    <li>
                      <h3>4564752</h3>
                      <span>Views</span>
                    </li>
                    <li>
                      <h3>34552</h3>
                      <span>Comments</span>
                    </li>
                    <li>
                      <h3>872670</h3>
                      <span>Likes</span>
                    </li>
                    <i className="fa fa-youtube"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>Instagram<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#B034A6"}}>
                    <li>
                      <h3>215572</h3>
                      <span>Subscribers</span>
                    </li>
                    <li>
                      <h3>4564752</h3>
                      <span>Views</span>
                    </li>
                    <li>
                      <h3>34552</h3>
                      <span>Comments</span>
                    </li>
                    <li>
                      <h3>872670</h3>
                      <span>Likes</span>
                    </li>
                    <i className="fa fa-instagram"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>Pinterest<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#BD081C"}}>
                    <li>
                      <h3>215572</h3>
                      <span>Subscribers</span>
                    </li>
                    <li>
                      <h3>4564752</h3>
                      <span>Views</span>
                    </li>
                    <li>
                      <h3>34552</h3>
                      <span>Comments</span>
                    </li>
                    <li>
                      <h3>872670</h3>
                      <span>Likes</span>
                    </li>
                    <i className="fa fa-pinterest"></i>
                  </ul>
              </div>
              <div className="media-stats-item">
              <div className="media-stats-header">
                  <h3>News Websites<a href="/" className="extenal-link"><i className="fa fa-external-link "/></a></h3>
                </div>

                  <ul className="media-stats-counts" style={{backgroundColor: "#5181B8"}}>
                    <li>
                      <h3>215572</h3>
                      <span>Subscribers</span>
                    </li>
                    <li>
                      <h3>4564752</h3>
                      <span>Views</span>
                    </li>
                    <li>
                      <h3>34552</h3>
                      <span>Comments</span>
                    </li>
                    <li>
                      <h3>872670</h3>
                      <span>Likes</span>
                    </li>
                    <i className="fa fa-newspaper-o"></i>
                  </ul>
              </div>
            </div>
         </div>
      </section>
    );
  }
}

export default SocialMediaStats
