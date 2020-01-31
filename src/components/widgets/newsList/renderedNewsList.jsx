import React from 'react';
import styles from './/_newsList.module.css';
import { Link } from 'react-router-dom';


export const renderedNewsList = (item, i) => {
  return (
    <div key={i}>
      <div className={styles.newslist_item}>
        <Link to={`/articles/${item.id}`}>
          <h2>{item.title}</h2>
        </Link>
      </div>
    </div>
  )
}