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
let verticalAlignmentList =  [
  { "value": "top", "label": "top" },
  { "value": "middle", "label": "middle" },
  { "value": "bottom", "label": "bottom" }
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
    this.updateTitleConfigData = this.updateTitleConfigData.bind(this);
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
     this.updateTitleConfigData(this.props.chartTitleConfig.text, selectedOption.value, this.props.chartTitleConfig.margin, this.props.chartTitleConfig.useHTML, this.props.chartTitleConfig.verticalAlign, this.props.chartTitleConfig.style.color, this.props.chartTitleConfig.style.fontSize, this.props.chartTitleConfig.style.fontWeight, this.props.chartTitleConfig.style.fontFamily)
 }

handleVerticalAligmnet(selectedOption){
     this.updateTitleConfigData(this.props.chartTitleConfig.text,  this.props.chartTitleConfig.align, this.props.chartTitleConfig.margin, this.props.chartTitleConfig.useHTML, selectedOption.value, this.props.chartTitleConfig.style.color, this.props.chartTitleConfig.style.fontSize, this.props.chartTitleConfig.style.fontWeight, this.props.chartTitleConfig.style.fontFamily)
 }
handleFontWeight(selectedOption){
     this.updateTitleConfigData(this.props.chartTitleConfig.text, this.props.chartTitleConfig.align, this.props.chartTitleConfig.margin, this.props.chartTitleConfig.useHTML, this.props.chartTitleConfig.verticalAlign, this.props.chartTitleConfig.style.color, this.props.chartTitleConfig.style.fontSize, selectedOption.value, this.props.chartTitleConfig.style.fontFamily)
 }

 handleFontFamily(selectedOption){
     this.updateTitleConfigData(this.props.chartTitleConfig.text, this.props.chartTitleConfig.align, this.props.chartTitleConfig.margin, this.props.chartTitleConfig.useHTML, this.props.chartTitleConfig.verticalAlign, this.props.chartTitleConfig.style.color, this.props.chartTitleConfig.style.fontSize, this.props.chartTitleConfig.style.fontWeight, selectedOption.value)
 }


handleInputOnchange({target}){
    let title = document.querySelector('input[name="ChartTitle"]').value;
    let margin = document.querySelector('input[name="ChartTitleMargin"]').value;
    let fontSize = document.querySelector('input[name="ChartTitleFontSize"]').value;
    this.updateTitleConfigData(title, this.props.chartTitleConfig.align, margin, this.props.chartTitleConfig.useHTML, this.props.chartTitleConfig.verticalAlign, this.props.chartTitleConfig.style.color, fontSize, this.props.chartTitleConfig.style.fontWeight, this.props.chartTitleConfig.style.fontFamily)
}

handleChangeComplete(color) {
     this.updateTitleConfigData(this.props.chartTitleConfig.text, this.props.chartTitleConfig.align,this.props.chartTitleConfig.margin, this.props.chartTitleConfig.useHTML, this.props.chartTitleConfig.verticalAlign, color.hex, this.props.chartTitleConfig.style.fontSize, this.props.chartTitleConfig.style.fontWeight, this.props.chartTitleConfig.style.fontFamily)
}

updateTitleConfigData(text, align,margin, useHTML, verticalAlign, color, fontSize, fontWeight, fontFamily){
    let chartTitleConfig = {
         text : text,
         align : align,
         margin : margin,
         useHTML : useHTML,
         verticalAlign : verticalAlign,
         style:{
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            fontFamily : fontFamily
         }
    }
    this.props.dispatch(PieChartSubTitleConfig(chartTitleConfig))
}

 render() {
  return (
    <div className="chart-config-creater chart-title">
        <h4 className="form-h4">Chart Sub Title</h4>
        <div className="chart-config-form">
        <div className="ti-grid-row">
         <div className="ti-cols ti-col-12">
           <div className="form-group">
             <input type="text"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitle"  id="chart-title" placeholder="Title" value={this.props.chartTitleConfig.text}  />
           </div>
         </div>
          <div className="ti-cols ti-col-12">
            <h4 className="form-h4">Title Style</h4>
          </div>
        <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>Color</label>
             <div className="color-picker-goroup">
             <button type="button"  className="color-picker-btn" onClick={this.handleColorPicker.bind(this)}> {this.props.chartTitleConfig.style.color}<span style={{backgroundColor:this.props.chartTitleConfig.style.color}}></span></button>
             {this.state.displayColorPicker ?
             <div className="color-picker-wrapper">
                <div className={this.state.overlay} onClick={this.handleColorOverlay.bind(this)}></div>
                  <CompactPicker color={ this.props.chartTitleConfig.style.color }
                    onChangeComplete={ this.handleChangeComplete.bind(this)} width={100} />
                    </div> : null}
            </div>
         </div>
       </div>

       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>FontSize</label>
            <input type="number"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitleFontSize"  id="title-font-size" placeholder="Font Size(in px)" value={this.props.chartTitleConfig.style.fontSize}  />
         </div>
       </div>
       <div className="ti-cols ti-col-6">
          <div className="form-group">
             <label>FontFamily</label>
            <Select className="react-select-box"
                 name={'chart-aligment'}
                 value={this.props.chartTitleConfig.style.fontFamily}
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
                 value={this.props.chartTitleConfig.style.fontWeight}
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
                     value={this.props.chartTitleConfig.align}
                     removeSelected={true}
                     clearable={false}
                     onChange={this.handleChartAligmnet.bind(this)}
                     placeholder={"Title Alignment"}
                     options={titleAlignmentList}
                 />
           </div>
        </div>
          <div className="ti-cols ti-col-6">
             <div className="form-group">
             <label>Vertical Alignment</label>
              <Select className="react-select-box"
                     name={'chart-aligment'}
                     value={this.props.chartTitleConfig.verticalAlign}
                     removeSelected={true}
                     clearable={false}
                     onChange={this.handleVerticalAligmnet.bind(this)}
                     placeholder={"Vertical Alignment"}
                     options={verticalAlignmentList}
                 />
           </div>
        </div>
          <div className="ti-cols ti-col-12">
              <div className="form-group">
                 <label>Margin</label>
                 <input type="number"  className="input-ctrl" onChange={this.handleInputOnchange.bind(this)} name="ChartTitleMargin"  id="chart-title" placeholder="Margin(in px)" value={this.props.chartTitleConfig.margin}  />
             </div>
         </div>
         </div>
        </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  const {chartTitleConfig} = state.PieChrtsConfig
  return {chartTitleConfig}
}

export default connect(mapStateToProps)(ChartSubTitleConfig);
