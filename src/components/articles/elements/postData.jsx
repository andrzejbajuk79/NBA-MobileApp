import React from 'react';
import styles from '../_styles.module.css'

const PostData = (props) => (
 <div className={styles.articlePostdata}>
  <div>Date : <span> {props.date}</span>
  </div>
  <div>author : <span> {props.author}</span>
  </div>
 </div>

)

export default PostData;
