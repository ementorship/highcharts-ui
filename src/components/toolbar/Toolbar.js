import React, { Component } from 'react';
import '@material/toolbar/mdc-toolbar.scss';
import './dist/style.css';

class Toolbar extends Component {
  constructor(props){
      super(props)
      this.state= {
          profileMenu :false
      }
      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
   this.wrapperRef = node;
 }

  handleClickOutside(event) {
   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    this.setState({profileMenu: false})
   }
 }

  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar-header mdc-elevation--z1 ">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <span onClick={this.props.menuToggleHandle} className="material-icons mdc-toolbar__menu-icon">menu</span>
            <a href="#" className="mdc-toolbar__title app-logo">Social Media Analytics</a>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            <div className="user-control" ref={this.setWrapperRef}>
                <p onClick={()=> {this.setState({profileMenu: !this.state.profileMenu} ) }}><i className="fa fa-user" /> Admin <i className="fa fa-angle-down" /></p>
                <ul className={ this.state.profileMenu ? "user-profile-menu show" : "user-profile-menu"}>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Sign out</a></li>
                </ul>
            </div>
          </section>
        </div>
      </header>
    );
  }
}

export default Toolbar;
