import {PIE_CHART_TITLE_CONFIG, PIE_CHART_SUB_TITLE_CONFIG} from '../constants/PieChartConstants';

export function PieChartTitleConfig(configFile){
  return {
    type: PIE_CHART_TITLE_CONFIG,
    chartTitleConfig : configFile
  }
}

export function PieChartSubTitleConfig(configFile){
  return {
    type: PIE_CHART_SUB_TITLE_CONFIG,
    chartSubTitleConfig : configFile
  }
}
