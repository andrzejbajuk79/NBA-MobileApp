import React, { Component } from 'react';
import {
 firebaseDB,
 firebaseLooper,
 firebaseTeams
} from '../../../../utils/firebase'
import styles from '../../_styles.module.css';
import Header from './header';



class NewsArticles extends Component {
 state = {
  article: [],
  team: []
 }
 componentDidMount() {
firebaseDB.ref(`articles/${this.props.match.params.id}`)
.once('value').then(snapshot=>{
 let article = snapshot.val();
 firebaseTeams.orderByChild('id').equalTo(article.team)
 .once('value').then(snapshot=>{
  const team = firebaseLooper(snapshot);
  this.setState({article,team})
 })
})

  // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
  //  .then(response => {
  //   let article = response.data[0];
  //   axios.get(`${URL}/teams/?id=${article.team}`)
  //    .then(response => {
  //     this.setState({ article, team: response.data })
  //    })
  //  })
 }
 render() {
  const { article, team } = this.state;

  return (
   <div className={styles.aticleWrapper}>
    <Header
     teamData={team[0]}
     date={article.date}
     author={article.author} />
    <div className={styles.articleBody}>
     <h1>{article.title}</h1>
     <div className={styles.articleImage}
      style={{
       background: `url('/images/articles/${article.image}')`
      }}
     ></div>
     <div className={styles.articleText}>
      {article.body}</div>
    </div>
   </div>
  )
 }
}

export default NewsArticles;
