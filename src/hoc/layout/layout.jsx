import React, { Component } from 'react'
import './_layout.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class Layout extends Component {
 state = {
  showNav: false
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
    <Footer />
   </div>
  )
 }
}
// {this.props.children}  w routes.js  to sa wszystkie podstrony
//  plus header i footer na sztywno to tworzy layout
export default Layout
