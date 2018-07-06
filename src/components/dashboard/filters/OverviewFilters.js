import React, { Component } from 'react';
import { Icon } from 'react-mdc-web';
import Select from 'react-select';
import DigitalClock from '../digital-clock/DigitalClock';
import 'react-select/dist/react-select.css';
import './dist/style.css';
import PoliticianName from './dist/politican-name';
import PoliticianParty from './dist/politican-party';
import {connect} from 'react-redux';
import {fetchPoliticianName, selectedPoliticianName } from '../../../actions/FiltersActions';
import {fetchSentimentAnalysisData} from '../../../actions/SentimentAnalysisActions';
import {fetchPostAnalysisData} from '../../../actions/PostAnalysisActions';

let politicalNameListUpdated = [];

class OverviewFilters extends Component {
  constructor(props){
        super(props)
        this.state= {
            selectedParty :''
        }
    }
    componentDidMount(){
      this.props.dispatch(fetchPoliticianName());
    }
    handlePoliticianNameChange(selectedOption){
      this.props.dispatch(selectedPoliticianName(selectedOption.value))
      this.props.dispatch(fetchSentimentAnalysisData(selectedOption.value))
      this.props.dispatch(fetchPostAnalysisData(selectedOption.value))          
    }

    handlePoliticianPartyChange = (selectedParty) => {
    this.setState({ selectedParty });
    // console.log(`Selected: ${selectedPolitician.label}`);
    }

  componentWillReceiveProps(nextProps)
  {
    if(nextProps.PoliticianNameList.length !== 0){
      let politicalNameList = nextProps.PoliticianNameList;
      politicalNameListUpdated = [];
      for(let i= 0; i < politicalNameList.length; i++){
        politicalNameListUpdated.push({"value": politicalNameList[i], "label" : (politicalNameList[i].slice(0,3))})
      }
    }
  }

  render() {
  const {selectedParty } = this.state;

    return (
      <div className="dashboard-filters">
        <div className="mdc-layout-grid-row">
          <div className="mdc-layout-grid mdc-col-4">
            <div className="filter-group">
              <label>Political Name </label>
              <Select className="sma-react-select"
                     name={'politican-name'}
                     value={this.props.SelectedPoliticianName}  // to make it single select remove this line with ---> value={value}
                     removeSelected={true}
                     clearable={false}
                     onChange={this.handlePoliticianNameChange.bind(this)}
                     placeholder={"Select Politician Name"}
                     options= {politicalNameListUpdated}
                 />
            </div>
          </div>
          <div className="mdc-layout-grid mdc-col-4">
            <div className="filter-group">
              <label>Political Party </label>
              <Select className="sma-react-select"
                     name={'politican-name'}
                     value={selectedParty}  // to make it single select remove this line with ---> value={value}
                     removeSelected={true}
                     clearable={false}
                     onChange={this.handlePoliticianPartyChange.bind(this)}
                     placeholder={"Select Political Party"}
                     options= {PoliticianParty}
                 />
            </div>
          </div>
              <div className="mdc-layout-grid mdc-col-4">
                <DigitalClock />
              </div>
       </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  const {loading, PoliticianNameList, SelectedPoliticianName} = state.PoliticianNameData
  return {loading, PoliticianNameList, SelectedPoliticianName}
}
export default connect(mapStateToProps)(OverviewFilters);
