import React, { Component } from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { Icon } from 'react-mdc-web';
import { NavLink } from 'react-router-dom';


class MenuList extends Component {
  constructor(props){
    super(props);
    this.state={
            openKeys: [],
            selectedKeys: ["10"]
    };
    this.onClick = this.onClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onClick(info) {
    // console.log('click ', info);
  }

  onOpenChange(openKeys) {
    // console.log('onOpenChange', openKeys);
    this.setState({
      openKeys,
    });
  }

  render() {
    return (
      <Menu
        onOpenChange={this.onOpenChange}
        onClick={this.onClick}
        mode="inline"
        selectedKeys={this.state.selectedKeys}
        onOpenChange={this.onOpenChange}
        openKeys={this.state.openKeys}
       >
        <MenuItem key="10"> <NavLink to="/"><span><Icon name='dashboard'/>Dashboard</span></NavLink></MenuItem>

        <MenuItem key={"social"} className="navigation-heading">Social Media</MenuItem>
        <MenuItem key="1"> <NavLink to="/"><span><i className="fa fa-twitter-square material-icons" /> Twitter</span></NavLink></MenuItem>
        <MenuItem key="2"> <NavLink to="/"><span><i className="fa fa-facebook-square material-icons" /> Facebook</span></NavLink></MenuItem>
        <MenuItem key="3"> <NavLink to="/"><span><i className="fa fa-linkedin-square material-icons" /> LinkedIn</span></NavLink></MenuItem>
        <MenuItem key="4"> <NavLink to="/"><span><i className="fa fa-youtube-square material-icons" /> Youtube</span></NavLink></MenuItem>
        <MenuItem key="5"> <NavLink to="/"><span><i className="fa fa-instagram material-icons" /> Instagram</span></NavLink></MenuItem>
        <MenuItem key="6"> <NavLink to="/"><span><i className="fa fa-pinterest-square material-icons" /> Pinterest</span></NavLink></MenuItem>
        <MenuItem key="7"> <NavLink to="/"><span><i className="fa fa-newspaper-o material-icons" /> News Websites</span></NavLink></MenuItem>
        <MenuItem key={"filter"} className="navigation-heading">Filters</MenuItem>
        <SubMenu  key="8" title={<span><Icon name='location_on'/>Location</span>}>
          <MenuItem key="8-1"> <NavLink to="">Aguascalientes</NavLink></MenuItem>
          <MenuItem key="8-2"> <NavLink to="">Baja California</NavLink></MenuItem>
          <MenuItem key="8-3"> <NavLink to="">Campeche</NavLink></MenuItem>
          <MenuItem key="8-4"> <NavLink to="">Chiapas</NavLink></MenuItem>
          <MenuItem key="8-5"> <NavLink to="">Mexico City</NavLink></MenuItem>
        </SubMenu>
          <SubMenu  key="9" title={<span><Icon name='accessibility'/>Age Group</span>}>
              <MenuItem key="9-1"> <NavLink to="">18-25</NavLink></MenuItem>
              <MenuItem key="9-2"> <NavLink to="">26-30</NavLink></MenuItem>
              <MenuItem key="9-3"> <NavLink to="">31-45</NavLink></MenuItem>
              <MenuItem key="9-4"> <NavLink to="">45-65</NavLink></MenuItem>
              <MenuItem key="9-5"> <NavLink to="">65+</NavLink></MenuItem>
          </SubMenu>
      </Menu>

  )}
}
export default MenuList;
