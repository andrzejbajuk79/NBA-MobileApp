import React from 'react';
import styles from '../_styles.module.css'
import moment from 'moment';


const formatDate =(date)=>{
 return moment(date).format(' MM-DD-YYYY')
}
const PostData = (props) => (
 <div className={styles.articlePostdata}>
  <div>Date : <span>{formatDate(props.date) } </span>
  </div>
  <div>author : <span> {props.author}</span>
  </div>
 </div>

)

export default PostData;
