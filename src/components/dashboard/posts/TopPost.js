import React, { Component } from 'react';
import PostItem from './PostItem';
import postIcon1  from './dist/post1.jpg';
import postIcon2  from './dist/post2.jpg';
import defaultImg  from './dist/default.jpg';
import {NavLink} from "react-router-dom";

import './style.css';
let postList = [{
  id:1,
  post_title : "The Brand Value of Influencer Marketing in 2018 [Infographic] ",
  post_date : "23th April, 2018",
  post_desc: "When you boost a post, you select the audience that you want to see it. Choose people who like your Page, extend it to their friends or even select a new audience that you tailor by age, location, interests and more.",
  post_source: "Youtube",
  post_img : null
},
{
  id:2,
  post_title : "Study: 45% plan to use Facebook less amid Cambridge Analytica scandal",
  post_date : "20th April, 2018",
  post_desc: "You're in control of how much you spend on a boosted post – we'll never charge more than the budget you select. The budget that you select is the per-day price of boosting a post.",
  post_source: "Facebook",
    post_img : postIcon2
},
{
  id:3,
  post_title : "What #SMTLive Chat Members Have to Say About Facebook's News Feed Update ",
  post_date : "23th April, 2018",
  post_desc: "When you boost a post, you select the audience that you want to see it. Choose people who like your Page, extend it to their friends or even select a new audience that you tailor by age, location, interests and more.",
  post_source: "Twitter",
  post_img : postIcon1
}
]

class TopPost extends Component {
  render() {
    return (
      <section className="charts-outer ">
         <div className="chart-header">
          <h4><i className="fa fa-line-chart trending"/>  Top Trending Posts</h4>
         </div>
         <div className="chart-container post-outer" >
            <ul className="post-list">
            <ul className="post-list">
              {postList.map((postItem, index) => (
                <div className="trending-post-list-item" key={index}>
                  {postItem.post_img !== null ? <div className="img-box">
                    <img src={postItem.post_img} alt={postItem.post_title}/>
                  </div> : <div className="img-box">
                    <img src={defaultImg} alt={postItem.post_title}/>
                  </div> }
                  <div className="post-content">
                    <NavLink to="/">{postItem.post_title}</NavLink>
                    <p>{(postItem.post_desc).slice(0, 100)}..</p>
                    <div className="post-info">
                      <span className="post-info-item">{postItem.post_date}</span>
                      <span className="post-info-item">3k people talking about this</span>
                    </div>
                    <p className={`post-source ${postItem.post_source}`}><strong>Source: </strong> <NavLink to="/">{postItem.post_source}</NavLink></p>
                  </div>
                </div>
              )
              )}
            </ul>
            </ul>
            </div>
      </section>
    );
  }
}

export default TopPost;
