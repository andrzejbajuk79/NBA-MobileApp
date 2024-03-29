import React from 'react';
import styles from './_slider.module.css';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';



const SliderTemplate = (props) => {
 let template = null;
 const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  ...props.settings
 }



 switch (props.type) {
  case ('featured'):
   template = props.data.map((item, i) =>( 
    //  renderedNews(item, i) 
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
     ))
   break;

  default:
   template = null;
 }
 return (
  <Slick {...settings}>
   {template}
  </Slick>
 )
}
export default SliderTemplate;
