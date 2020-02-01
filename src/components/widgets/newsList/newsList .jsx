import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import axios from 'axios'

import { URL } from '../../../utils/config';
import styles from './_newsList.module.css'
import Button from '../buttons/buttons';

import CardInfo from '../card-info/cardInfo';
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
   axios.get(`${URL}/teams`)
    .then(response => this.setState({ teams: response.data }))
  }

  const { items } = this.state;
  axios.get(`${URL}/articles?_start=${start}^&_end=${end}`)
   .then(response => this.setState({
    items: [...items, ...response.data]
   }))
 }
 loadMore = () => {
  let end = this.state.end + this.state.amount;
  this.request(this.state.end, end)
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
     loadMore={() => this.loadMore()}
     action="Load more news"
    />

   </div>
  )
 }
}

export default NewsList;