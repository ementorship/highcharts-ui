import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import 'material-components-web/dist/material-components-web.min.css';
import '@material/elevation/dist/mdc.elevation.css';
import './static/css/font-awesome.css';
import './static/css/grid.css';
import './static/css/style.css';
import './static/css/forms.css';
import RouteComponents from './route';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <RouteComponents />
    </Provider>, document.getElementById('root'));
