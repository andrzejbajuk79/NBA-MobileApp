import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import { items } from './sideNavItemOptions'




const SideNavItems = () => {

 const showItems = () => {
  return items.map((item, i) => {
   return (
    <div key={i} className={item.type}>
     <Link to={item.link}>
      <FontAwesome name={item.icon} />
      {item.text}
     </Link>
    </div>
   )
  })
 }
 return (
  <div>
   {showItems()}
  </div>
 )
}

export default SideNavItems;