import React from 'react'
import styles from '../_styles.module.css'
const TeamInfo = (props) => {
 return (
  <div className={styles.articleTeamHeader}>
   <div className={styles.left}
    style={{
     background: `url('/images/teams/${props.team.logo}')`
    }}
   ></div>
   <div className={styles.right}>
    <div>
     <span>{props.team.city} {props.team.name}</span>
    </div>
    <div>
    <strong>W{props.team.stats[0].wins} -L{props.team.stats[0].defeats}</strong>
    </div>
   </div>
  </div>
 )
}
export default TeamInfo;
