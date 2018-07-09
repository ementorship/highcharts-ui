import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PieChartSubTitleConfig} from '../../../actions/PieChartActions';
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


class ChartSubTitleConfig extends Component {
  constructor(props){
    super(props)
    this.state = {
     displayColorPicker : false,
     overlay : ""
    }
    this.updateSubTitleConfigData = this.updateSubTitleConfigData.bind(this);
  }

componentDidMount(){

}
handleColorPicker(){
    this.setState({
        displayColorPicker : !this.state.displayColorPicker,
        overlay : "colorpicker-overlay"
    })
}
handleColorOverlay(){
   this.setState({
        displayColorPicker : !this.state.displayColorPicker,
        overlay : ""
    })
}
handleChartAligmnet(selectedOption){
     this.updateSubTitleConfigData(this.props.chartSubTitleConfig.text, selectedOption.value, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, this.props.chartSubTitleConfig.style.fontWeight, this.props.chartSubTitleConfig.style.fontFamily)
 }

handleFontWeight(selectedOption){
     this.updateSubTitleConfigData(this.props.chartSubTitleConfig.text, this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, selectedOption.value, this.props.chartSubTitleConfig.style.fontFamily)
 }

 handleFontFamily(selectedOption){
     this.updateSubTitleConfigData(this.props.chartSubTitleConfig.text, this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, this.props.chartSubTitleConfig.style.fontSize, this.props.chartSubTitleConfig.style.fontWeight, selectedOption.value)
 }


handleInputOnchange({target}){
    let title = document.querySelector('input[name="ChartTitle"]').value;
    let fontSize = document.querySelector('input[name="ChartTitleFontSize"]').value;
    this.updateSubTitleConfigData(title, this.props.chartSubTitleConfig.align, this.props.chartSubTitleConfig.style.color, fontSize, this.props.chartSubTitleConfig.style.fontWeight, this.props.chartSubTitleConfig.style.fontFamily)
}

handleChangeComplete(color) {
     this.updateSubTitleConfigData(this.props.chartSubTitleConfig.text, this.props.chartSubTitleConfig.align, color.hex, this.props.chartSubTitleConfig.style.fontSize, this.props.chartSubTitleConfig.style.fontWeight, this.props.chartSubTitleConfig.style.fontFamily)
}

updateSubTitleConfigData(text, align, color, fontSize, fontWeight, fontFamily){
    let chartSubTitleConfig = {
         text : text,
         align : align,
         style:{
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            fontFamily : fontFamily
         }
    }
    this.props.dispatch(PieChartSubTitleConfig(chartSubTitleConfig))
}

 render() {
  return (
    <div className="chart-config-creater chart-title">
        <h4 className="form-h4">Chart Sub  Title</h4>
        <div className="chart-config-form">

        <div className="ti-grid-row">
         <div className="ti-cols ti-col-12">
           <div className="form-group">
             <input type="text"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitle"  id="chart-title" placeholder="Title" value={this.props.chartSubTitleConfig.text}  />
           </div>
         </div>
          <div className="ti-cols ti-col-12">
            <h4 className="form-h4">Title Style</h4>
          </div>
        <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>Color</label>
             <div className="color-picker-goroup">
             <button type="button"  className="color-picker-btn" onClick={this.handleColorPicker.bind(this)}> {this.props.chartSubTitleConfig.style.color}<span style={{backgroundColor:this.props.chartSubTitleConfig.style.color}}></span></button>
             {this.state.displayColorPicker ?
             <div className="color-picker-wrapper">
                <div className={this.state.overlay} onClick={this.handleColorOverlay.bind(this)}></div>
                  <CompactPicker color={ this.props.chartSubTitleConfig.style.color }
                    onChangeComplete={ this.handleChangeComplete.bind(this)} width={100} />
                    </div> : null}
            </div>
         </div>
       </div>

       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>FontSize</label>
            <input type="number"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitleFontSize"  id="title-font-size" placeholder="Font Size(in px)" value={this.props.chartSubTitleConfig.style.fontSize}  />
         </div>
       </div>
       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>FontFamily</label>
            <Select className="react-select-box"
                 name={'chart-aligment'}
                 value={this.props.chartSubTitleConfig.style.fontFamily}
                 removeSelected={true}
                 clearable={false}
                 onChange={this.handleFontFamily.bind(this)}
                 placeholder={"Font Family"}
                 options={fontFamilyList}
             />

         </div>
       </div>
       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>FontWeight</label>
            <Select className="react-select-box"
                 name={'chart-aligment'}
                 value={this.props.chartSubTitleConfig.style.fontWeight}
                 removeSelected={true}
                 clearable={false}
                 onChange={this.handleFontWeight.bind(this)}
                 placeholder={"Font Weight"}
                 options={fontWeightList}
             />
         </div>
       </div>
         <div className="ti-cols ti-col-6">
             <div className="form-group">
             <label>Title Alignment</label>
              <Select className="react-select-box"
                     name={'chart-aligment'}
                     value={this.props.chartSubTitleConfig.align}
                     removeSelected={true}
                     clearable={false}
                     onChange={this.handleChartAligmnet.bind(this)}
                     placeholder={"Title Alignment"}
                     options={titleAlignmentList}
                 />
           </div>
        </div>
         </div>
        </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  const {chartSubTitleConfig} = state.PieChrtsConfig
  return {chartSubTitleConfig}
}

export default connect(mapStateToProps)(ChartSubTitleConfig);
