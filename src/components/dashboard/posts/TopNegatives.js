import React, { Component } from 'react';
import PostItem from './PostItem';
import {fetchPostAnalysisData} from '../../../actions/PostAnalysisActions';
import {connect} from 'react-redux';
import Loader from 'react-loader-advanced';
import LoaderIcon from '../../loader/loader';
import './style.css';
const loader = <LoaderIcon />;

class TopNegatives extends Component {
  render() {
    return (
      <section className="charts-outer ">
         <div className="chart-header">
          <h4><i className="fa fa-arrow-down negative"/> Top 5 Negatives Posts </h4>
         </div>
          <Loader show={this.props.loading} message={loader} disableDefaultStyles={false}>
             <div className="chart-container post-outer" >
                <ul className="post-list">
                  {this.props.TopNegativePost.length !== 0 ? this.props.TopNegativePost.map((postItem, index) =>(
                    <PostItem  key={index} post_url={'https://twitter.com/'+postItem["user.screen_name"]+'/status/'+postItem.id_str}  post_date={postItem.timestamp_ms} post_desc={postItem.tweet} />))
                   : <li className="no-data-found"><strong> No Data Found !</strong> </li>}
                </ul>
                </div>
            </Loader>
      </section>
    );
  }
}

function mapStateToProps(state){
  const {loading, TopNegativePost} = state.PostAnalysisData
  const {SelectedPoliticianName} = state.PoliticianNameData
  return {loading, TopNegativePost, SelectedPoliticianName}
}
export default connect(mapStateToProps)(TopNegatives);
