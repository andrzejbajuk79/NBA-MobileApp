import React from 'react';
import styles from './_slider.module.css';
import { Link } from 'react-router-dom';


export const renderedNews = (item, i) => { 
 return (
  <div key={i}>
   <div className={styles.featured_item}>
    <div className={styles.featured_image}
     style={{
      background: `url(../images/articles/${item.image})`
     }}></div>
    <Link to={`/articles/${item.id}`}>
     <div className={styles.featured_caption}>
      {item.title}</div>
    </Link>
   </div>
  </div>
 )
}