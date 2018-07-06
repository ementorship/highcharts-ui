import React, { Component } from 'react';
import loaderImg from './dist/loading.gif';
import './dist/style.css';

class Loader extends Component {
    render() {
        return (
        <div className="loader-content">
            <img src={loaderImg} className="loading-icon"  alt="Loading .."/>
            <p>Loading...</p>
        </div>
        );
    }
}
export default Loader;
