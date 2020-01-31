import React, { Component } from 'react';
import axios from 'axios';

import styles from './videosList.module.css';
import {URL} from '../../../utils/config';
import Button from '../buttons/buttons';


class VideosList extends Component {
 state={
teams:[],
videos: [],
start:this.props.start,
end:this.props.start + this.props.amount,
amount: this.props.amount
 }

 renderTitle =()=> {
  return this.props.title && <h3><strong>NBA</strong>  Videos</h3>
 }
 loadMore =() => {

 }
renderButton=()=> {
  return this.props.loadmore ?
  <Button 
  type='loadmore'
  loadmore={()=>this.loadMore()}
  action='Load More Videos'
  />
  :
  <Button type="linkTo" action='More Videos' linkTo='/videos' />
 }
 render() {
  return (
   <div className={styles.videoList_wrapper}>
    {this.renderTitle()}
    {this.renderButton()}
   </div>
  )
 }
}

export default VideosList;
