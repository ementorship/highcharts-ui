import React, { Component } from 'react';
import moment from 'moment';

class PostItem extends Component {
  render() {
    return (
      <li>
          <div className="post-list-item">
            <a href={this.props.post_url} target="_blank">{this.props.post_desc.slice(0,30)}...</a>
            <div className="post-info">
              <span className="date-time">{moment.unix(this.props.post_date/1000).format('llll') }</span>
            </div>
            <p>{this.props.post_desc}</p>
          </div>
        </li>
    );
  }
}

export default PostItem;
