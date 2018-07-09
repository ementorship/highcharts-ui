import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PieChartSeriesTypeConfig} from '../../../actions/PieChartActions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { CompactPicker    } from 'react-color'

let titleAlignmentList =  [
  { "value": "left", "label": "left" },
  { "value": "center", "label": "center" },
  { "value": "right", "label": "right" }
];
let fontWeightList =  [
  { "value": "normal", "label": "normal" },
  { "value": "bold", "label": "bold" }
];
let fontFamilyList =  [
  { "value": "Roboto", "label": "Roboto" },
  { "value": "Arial", "label": "Arial" },
  { "value": "Times New Roman", "label": "Times New Roman" },
  { "value": "Open Sans", "label": "Open Sans" }
];


class ChartSeriesType extends Component {
  constructor(props){
    super(props)
    this.state = {
     displayColorPicker : false,
     overlay : ""
    }
    this.updateChartSeriesConfigData = this.updateChartSeriesConfigData.bind(this);
  }

componentDidMount(){

}
handleColorPicker(){
    this.setState({
        displayColorPicker : !this.state.displayColorPicker,
        overlay : "colorpicker-overlay"
    })
}
// handleColorOverlay(){
//    this.setState({
//         displayColorPicker : !this.state.displayColorPicker,
//         overlay : ""
//     })
// }
// handleChartAligmnet(selectedOption){
//      this.updateChartSeriesConfigData(this.props.chartSubTitleConfig.text, selectedOption.value, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, this.props.chartSubTitleConfig.style.fontWeight, this.props.chartSubTitleConfig.style.fontFamily)
//  }
//
// handleFontWeight(selectedOption){
//      this.updateChartSeriesConfigData(this.props.chartSubTitleConfig.text, this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, selectedOption.value, this.props.chartSubTitleConfig.style.fontFamily)
//  }
//
//  handleFontFamily(selectedOption){
//      this.updateChartSeriesConfigData(this.props.chartSubTitleConfig.text, this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, this.props.chartSubTitleConfig.style.fontWeight, selectedOption.value)
//  }
//
//
handleInputOnchange({target}){
    // let title = document.querySelector('input[name="ChartTitle"]').value;
    // let fontSize = document.querySelector('input[name="ChartTitleFontSize"]').value;
    // this.updateChartSeriesConfigData(this.props., this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, fontSize, this.props.chartSubTitleConfig.style.fontWeight, this.props.PieChartSeriesTypeConfig.style.fontFamily)
}


updateChartSeriesConfigData(type, name, data){
    let chartSeriesConfig = {
         type : name,
         name : name,
         data : data
    }
    this.props.dispatch(PieChartSeriesTypeConfig(chartSeriesConfig))
}

 render() {
  return (
    <div className="chart-config-creater chart-title">
        <h4 className="form-h4">Chart Type : Pie</h4>
        <div className="chart-config-form">
        <div className="ti-grid-row">
          <div className="ti-cols ti-col-12">
            <h4 className="form-h4">Series Name</h4>
          </div>
       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>Sereis Name</label>
            <input type="text"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitleFontSize"  id="title-font-size" placeholder="Font Size(in px)" value={this.props.ChartSeriesTypeConfig.name}  />
         </div>
       </div>



         </div>
        </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  const {ChartSeriesTypeConfig} = state.PieChrtsConfig
  return {ChartSeriesTypeConfig}
}

export default connect(mapStateToProps)(ChartSeriesType);
