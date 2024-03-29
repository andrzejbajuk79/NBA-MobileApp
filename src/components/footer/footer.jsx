import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import { CURRENT_YEAR } from '../../utils/config'

 const Footer = () => (
  <div className={styles.footer}>
   <Link to='/' className={styles.logo}>
   <img alt="nba logo" src="/images/logo.png"/>
   </Link>
   <div className={styles.right}>
   @NBA {CURRENT_YEAR} Wszystkie prawa zastrzeżone A.Bajuk</div>
  </div>
 )

export default Footer
