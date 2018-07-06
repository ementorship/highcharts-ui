import { createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import getApi from '../middleware/getApi';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, applyMiddleware(thunkMiddleware, getApi, middleware))

export default store;
