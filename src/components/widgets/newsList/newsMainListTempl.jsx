import React from 'react'
import styles from './_newsList.module.css'
import { CSSTransition} from 'react-transition-group'


import CardInfo from '../card-info/cardInfo';

const NewsMainListTempl = ({ item, teams, }) => (
 <CSSTransition
  classNames={{
   enter: styles.newsList_wrapper,
   enterActive: styles.newsList_wrapper_enter,
  }}
  timeout={500}
 >
  <div >
   <div className={styles.flex_wrapper}>
    <div className={styles.left}
     style={{
      background: `url('/images/articles/${item.image}')`
     }}>
     <div></div>
     </div>
     <div className={styles.right}>
     <CardInfo 
     date={item.date}
     team={item.team}
     teams={teams}/>
     <h2>{item.title}</h2>
     </div>
   </div>
  </div>

 </CSSTransition>

)


export default NewsMainListTempl;