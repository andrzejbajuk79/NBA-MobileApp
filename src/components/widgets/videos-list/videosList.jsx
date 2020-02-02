import React, { Component } from 'react';

import {
 firebaseTeams,
 firebaseVideos,
 firebaseLooper} from '../../../utils/firebase';
import styles from './_videosList.module.css';
import Button from '../buttons/buttons';
import VideosListTemplate from './videosListTemplate';


class VideosList extends Component {
 state = {
  teams: [],
  videos: [],
  start: this.props.start,
  end: this.props.start + this.props.amount,
  amount: this.props.amount
 }

 componentDidMount() {
  this.request(this.state.start, this.state.end)
 }

 request = (start, end) => {
  if (this.state.teams.length < 1) {
   firebaseTeams.once('value')
   .then((snapshot) => {
    const teams = firebaseLooper(snapshot);
    this.setState({ teams })
   })
  }
  firebaseVideos.orderByChild("id").startAt(start)
  .endAt(end).once('value')
  .then(snapshot=>{
   const videos= firebaseLooper(snapshot);
   this.setState({
    videos: [...this.state.videos, ...videos],
    start,
    end
   })
  })
  .catch(e=>console.log(e));
 }

 renderTitle = () => {
  return this.props.title && <h3><strong>NBA</strong>  Videos</h3>
 }
 renderVideos = () => {
  let template = null;
  switch (this.props.type) {
   case ('card'):
    template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
    break;
   default:
    template = null
  }
  return template;
 }


 loadmore = () => {
  let end = this.state.end + this.state.amount;
  this.request(this.state.end+1, end)
 }
 renderButton = () => {
  return this.props.loadmore ?
   <Button
    type='loadmore'
    loadmore={() => this.loadmore()}
    action='Load More Videos'
   />
   :
   <Button type="linkTo" action='More Videos' linkTo='/videos' />
 }
 render() {
  return (
   <div className={styles.videoList_wrapper}>
    {this.renderTitle()}
    {this.renderVideos()}
    {this.renderButton()}
   </div>
  )
 }
}

export default VideosList;
