import {GET_CONFIG_ACTIVE_TAB } from '../constants/ConfigFilesConstants.js';

export function GetConfigActiveTabName(activeTab){
  return {
    type: GET_CONFIG_ACTIVE_TAB,
    configActiveTab : activeTab
  }
}
