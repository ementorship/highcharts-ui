import React, { Component } from 'react';
import {MDCPersistentDrawer} from '@material/drawer';
import Toolbar from '../toolbar/Toolbar';
import '@material/drawer/mdc-drawer.scss';

class DrawerComponents extends Component {
  render() {
    return (
      <div className="graph-wrapper" >
          <div className="graph-wrapper-header">
            <h4>Trend Analysis</h4>
          </div>
          <div className="graph-wrapper-body">

          </div>
      </div>
    );
  }
}

export default DrawerComponents;
