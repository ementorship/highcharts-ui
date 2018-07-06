import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
import drawer from './DrawerReducers';
import PieChrtsConfig from './PieChartReducers';
import ConfigFileReducers from './ConfigFilesReducers.js'

export default combineReducers({
  drawer,
  PieChrtsConfig,
  ConfigFileReducers
});
