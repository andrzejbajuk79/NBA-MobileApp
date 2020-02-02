import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group'

import {
 firebaseLooper,
 firebaseArticles,
 firebaseTeams
} from '../../../utils/firebase';
import Button from '../buttons/buttons';
import NewsListTemplate from './newsListTemplate';
import NewsMainListTempl from './newsMainListTempl';

//home.js

class NewsList extends Component {
 state = {
  teams: [],
  items: [],
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
   // axios.get(`${URL}/teams`)
   //  .then(response => this.setState({ teams: response.data }))
  }
firebaseArticles.orderByChild("id").startAt(start)
.endAt(end).once('value')
.then(snapshot=>{
 const articles = firebaseLooper(snapshot);
 this.setState({
  items: [...this.state.items, ...articles],
  start,
  end
 })
})
.catch(e=>console.log(e));

  // const { items } = this.state;
  // axios.get(`${URL}/articles?_start=${start}^&_end=${end}`)
  //  .then(response => this.setState({
  //   items: [...items, ...response.data],start,end
  //  }))
 }
 loadMore = () => {
  let end = this.state.end + this.state.amount;
  this.request(this.state.end+1, end)
 }
 renderNews = (type) => {
  let template = null;
  const { teams, items } = this.state;
  switch (type) {
   case ('card'):
    template = items.map((item, i) =>
     <NewsListTemplate teams={teams} item={item} key={i} />
    )
    break;
   case ('cardMain'):
    template = items.map((item, i) =>
     <NewsMainListTempl teams={teams} item={item} key={i} />
    )
    break;
   default:
    template = null;
  }
  return template
 }
 render() {
console.log(this.state);

  return (
   <div>
    <TransitionGroup
     component='div'
     className='list'
    >
     {this.renderNews(this.props.type)}

    </TransitionGroup>
    <Button
     type='loadmore'
     loadmore={() => this.loadMore()}
     action="Load more news"
    />

   </div>
  )
 }
}

export default NewsList;