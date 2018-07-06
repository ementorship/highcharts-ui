import React,{Component} from 'react';
import './style.css';
import {MDCSnackbar} from '@material/snackbar';

class SnackBar extends Component{

    render(){
        return (
          <div className="mdc-snackbar"
                   aria-live="assertive"
                   aria-atomic="true"
                   aria-hidden="true">
                  <div className="mdc-snackbar__text">Message sent</div>
                  <div className="mdc-snackbar__action-wrapper">
                      <button type="button" className="mdc-snackbar__action-button">Undo</button>
                  </div>
              </div>
        );
    }
}

export default SnackBar;
