import React, { Component } from 'react'

import Header from '../../components/header/header';

class Layout extends Component {
 state = {
  showNav: true
 }
 togglesSideNav = (action) => {
  this.setState({ showNav: action })
 }

 render() {
  return (
   <div>
    <Header
     showNav={this.state.showNav} //otwart czy zamkniety
     onHideNav={() => this.togglesSideNav(false)} //callback do zamykania
     onOpenNav={() => this.togglesSideNav(true)} //callback do otwierania
    />
    {this.props.children}
    Footer
   </div>
  )
 }
}

export default Layout
