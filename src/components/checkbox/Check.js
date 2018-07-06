import React, {Component } from 'react';
import {MDCCheckbox} from '@material/checkbox/dist/mdc.checkbox';


class Check extends Component{
    componentDidMount(){
         new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    }
    render(){
        return (
            <div className={"mdc-checkbox " +this.props.className}>
                <input type="checkbox"
                       checked={this.props.checked}
                       onChange={this.props.onChange}
                       name={this.props.name}
                       id={this.props.id}
                       className="mdc-checkbox__native-control"/>
                <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark"
                         viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark__path"
                              fill="none"
                              stroke="white"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                </div>
            </div>
        )
    }
}


export default Check;