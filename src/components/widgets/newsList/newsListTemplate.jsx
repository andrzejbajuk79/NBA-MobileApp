import React from 'react'
import styles from './_newsList.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';

import CardInfo from '../card-info/cardInfo';

const NewsListTemplate = ({item,teams,}) => (
 <CSSTransition
 classNames={{
   enter:styles.newsList_wrapper,
   enterActive:styles.newsList_wrapper_enter,
   
 }}
 timeout={500}

 >
   <div >
     <div className={styles.newslist_item}>
       <Link to={`/articles/${item.id}`}>
         <CardInfo 
         date={item.date}
         team={item.team}
         teams={teams}/>
         <h2>{item.title}</h2>
       </Link>
     </div>
   </div>
 </CSSTransition>

)


export default NewsListTemplate 