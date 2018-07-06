import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class RedirectIndex extends Component {
    render() {
        return(
            <div>
                <Redirect to="/signin"/>
            </div>
        );
    }
}

export default RedirectIndex;
