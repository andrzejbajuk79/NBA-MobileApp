import React from 'react';
import styles from './_slider.module.css';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';
import {renderedNews} from './renderNews'


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
   template = props.data.map((item, i) => renderedNews(item, i) )
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
