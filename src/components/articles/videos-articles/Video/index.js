import React, { Component } from 'react';
import axios from 'axios'
import { URL } from '../../../../utils/config';
import styles from '../../_styles.module.css'
import Header from './header';
import { VideosRelated } from './../../../widgets/videos-list/videosRelated/videosRelated';

class VideoArticle extends Component {
 state = {
  article: [],
  team: [],
  teams: [],
  related: []
 }
 componentDidMount() {
  axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
   .then(response => {
    let article = response.data[0];
    axios.get(`${URL}/teams/?id=${article.team}`)
     .then(response => {
      this.setState({ article, team: response.data });
      this.getRelated();
     })
   })
 }
 getRelated = () => {


  axios.get(`${URL}/teams`)
   .then(response => {
    let teams = response.data;
    axios.get(`${URL}/videos?q=${this.state.article.tags[0]}&_limit=3`)
     .then(response =>{
      this.setState({teams,related:response.data})
     })
   })
 }
 render() {
  console.log('dddd',this.state.related);
  const { team, article } = this.state
  return (
   <div>
    <Header teamData={team[0]} />
    <div className={styles.videoWrapper}>
     <h1>{article.title}</h1>
     <iframe
      title='videoplayer'
      width='100%'
      hei='300px'
      src={`https://www.youtube.com/embed/${article.url}`}
     />
    </div>
    <VideosRelated 
    data={this.state.related}
    teams={this.state.teams}
    />
   </div>
  )
 }
}
export default VideoArticle;
