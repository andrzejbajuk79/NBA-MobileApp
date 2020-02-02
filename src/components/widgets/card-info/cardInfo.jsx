import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import styles from './_cardInfo.module.css';

//uzywamy w card info
const CardInfo = (props) => {
 const teamName = (teams, team) => {
  let data = teams.find(item => item.teamId === team)


  if (data) {
   return data.name
  }
 }
 const formatDate =(date)=>{
  return moment(date).format(' MM-DD-YYYY')
 }

 return (
  <div className={styles.cardInfo}>
   <span className={styles.teamName}>
    {teamName(props.teams, props.team)}
   </span>
   <span className={styles.date}>
    <FontAwesome name='clock-o' /> 
    {formatDate(props.date)}
   </span>
  </div>
 )
}

export default CardInfo;