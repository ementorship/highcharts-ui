import React, { Component } from 'react';
import {Drawer, DrawerContent} from 'react-mdc-web';
import MenuList from './MenuList';
import Toolbar from '../toolbar/Toolbar';
import {connect} from 'react-redux';
import './dist/style.css'
import {drawerToggleMenu } from '../../actions/DrawerActions';

class DrawerComponents extends Component {

    menuToggleHandle(){
      this.props.dispatch(drawerToggleMenu(!this.props.isDrawerOpen))
      }

    componentDidMount(){
      this.windowResize(window.innerWidth)
      window.addEventListener("resize", () => this.windowResize(window.innerWidth))
    }

    windowResize(width){
      if(width < 1280){
        this.props.dispatch(drawerToggleMenu(true))
      }
      else {
        this.props.dispatch(drawerToggleMenu(false))
      }
    }


  render() {
    return (
      <div className={ this.props.isDrawerOpen ? "drawer-wrapper toggled" : "drawer-wrapper"} >
        <Toolbar menuToggleHandle={this.menuToggleHandle.bind(this)}/>
        <Drawer open={this.props.isDrawerOpen} >
          <DrawerContent>
            <MenuList />
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}
function mapStateToProps(state){
  const {isDrawerOpen} = state.drawer
  return {isDrawerOpen}
}

export default connect(mapStateToProps)(DrawerComponents);
