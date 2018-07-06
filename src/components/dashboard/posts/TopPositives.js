import React, { Component } from 'react';
import PostItem from './PostItem';
import {connect} from 'react-redux';
import {fetchPostAnalysisData} from '../../../actions/PostAnalysisActions';
import './style.css';
import Loader from 'react-loader-advanced';
import LoaderIcon from '../../loader/loader';
const loader = <LoaderIcon />;

class TopPositives extends Component {

  componentDidMount(){
    this.props.dispatch(fetchPostAnalysisData(this.props.SelectedPoliticianName))
  }

  render() {
    return (
      <section className="charts-outer ">
         <div className="chart-header">
          <h4><i className="fa fa-arrow-up positive"/>  Top 5 Positives Posts</h4>
         </div>
           <Loader show={this.props.loading} message={loader} disableDefaultStyles={false}>
             <div className="chart-container post-outer" >
                <ul className="post-list">
                  {this.props.TopPostivePost.length !== 0 ? this.props.TopPostivePost.map((postItem, index) =>(
                    <PostItem  key={index} post_url={'https://twitter.com/'+postItem["user.screen_name"]+'/status/'+postItem.id_str} post_date={postItem.timestamp_ms} post_desc={postItem.tweet} />))
                   : <li className="no-data-found"><strong> No Data Found !</strong> </li>}
                </ul>
               </div>
           </Loader>
      </section>
    );
  }
}
function mapStateToProps(state){
  const {loading, TopPostivePost} = state.PostAnalysisData
  const {SelectedPoliticianName} = state.PoliticianNameData
  return {loading, TopPostivePost, SelectedPoliticianName}
}

export default connect(mapStateToProps)(TopPositives);
