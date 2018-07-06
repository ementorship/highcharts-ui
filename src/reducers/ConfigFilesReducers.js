import {GET_CONFIG_ACTIVE_TAB } from '../constants/ConfigFilesConstants.js';

const initialDrawerState = {
  ActiveConfigTab: "GettingStarted",
}

export default function ConfigFileReducers(state = initialDrawerState, action){

  switch (action.type) {
    case GET_CONFIG_ACTIVE_TAB:
      return Object.assign({}, state, {
      	ActiveConfigTab: action.configActiveTab
      })
      break;
    default:
      return state;
  }
}
