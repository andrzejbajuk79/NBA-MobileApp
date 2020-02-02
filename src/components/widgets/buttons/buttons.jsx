import React from 'react'
import styles from './_buttons.module.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
 let template = null;
 switch (props.type) {
  case 'loadmore':
   template = (
    <div
     className={styles.blue_btn}
     onClick={props.loadmore}
    >
     {props.action}
    </div>
   );
   break;
   case 'linkTo':
     template=(
       <Link
       className={styles.blue_btn}
        to={props.linkTo}>
        {props.action}
        </Link>
     )
     break;
  default:
   template = null;
 }
 return template;
}

export default Button;
