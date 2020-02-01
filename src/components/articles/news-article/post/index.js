import React, { Component } from 'react';
import axios from 'axios'
import { URL } from '../../../../utils/config';
import styles from '../../_styles.module.css';
import Header from './header';
import Body from './body';


class NewsArticles extends Component {
 state = {
  article: [],
  team: []
 }
 componentDidMount() {
  axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
   .then(response => {
    let article = response.data[0];
    axios.get(`${URL}/teams/?id=${article.team}`)
     .then(response => {
      this.setState({ article, team: response.data })
     })
   })
 }
 render() {
  const { article, team } = this.state;

  return (
   <div className={styles.aticleWrapper}>
    <Header
     teamData={team[0]}
     date={article.date}
     author={article.author} />
    <Body article={article} />
   </div>
  )
 }
}

export default NewsArticles;
