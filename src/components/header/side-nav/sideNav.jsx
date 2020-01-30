import React from 'react';
import SideNav from 'react-simple-sidenav'
import SideNavItems from './side-nav-items/sideNavItems ';
//propsy z layoutu czy otwarty zamnkniety
const SideNavigation = (props) => {
 return (
  <div>
   <SideNav 
    showNav={props.showNav}
    onHideNav={props.onHideNav}
   navStyle={{
    color:'white',
    background:'#242424',
    maxWidth:'220px',
   }}
    >
   <SideNavItems />
   </SideNav>
  </div>
 )
}

export default SideNavigation;