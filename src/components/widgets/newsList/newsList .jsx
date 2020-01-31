import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import axios from 'axios'
import { URL } from '../../../utils/config';
import { renderedNewsList } from './renderedNewsList';
import styles from './_newsList.module.css'
import { Link } from 'react-router-dom';
import Slick from 'react-slick';
class NewsList extends Component {
 state = {
  items: [],
  start: this.props.start,
  end: this.props.start + this.props.amount,
  amount: this.props.amount
 }

 componentDidMount() {
  this.request(this.state.start, this.state.end)
 }
 request = (start, end) => {
  const { items } = this.state;
  axios.get(`${URL}/articles?_start=${start}^&_end=${end}`)
   .then(response => this.setState({
    items: [...items, ...response.data]
   }))
 }
 loadMore =()=>{
  let end =this.state.end +this.state.amount;
  this.request(this.state.end,end)
 }
 renderNews = (type) => {
  let template = null;

  switch (type) {
   case ('card'):
    template = this.state.items.map(
     (item, i) => renderedNewsList(item, i))
    break;
   default:
    template = null;
  }
  return template
 }
 render() {
  return (
   <div>
    {this.renderNews(this.props.type)}
    <div onClick={()=>this.loadMore()}>Load More</div>
   </div>
  )
 }
}

export default NewsList;