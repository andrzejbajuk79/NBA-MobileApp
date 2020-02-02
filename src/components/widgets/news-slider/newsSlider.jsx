import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper } from '../../../utils/firebase'

import SliderTemplate from './sliderTemplate';


class NewsSlider extends Component {
 state = {
  news: []
 }

 componentDidMount() {
  firebaseArticles.limitToFirst(3).once('value')
   .then(snapshot => {
    const news = firebaseLooper(snapshot);
    this.setState({ news })
   })
  // const {start,amount}  = this.props;
  // axios.get(`${URL}/articles?_start=${start}^&_end=${amount}`)
  // .then(response=> this.setState({news:response.data}))
 }
 render() {
  const { type, settings } = this.props;
  const { news } = this.state;
  return (
   <div>
    <SliderTemplate data={news} type={type} settings={settings} />
   </div>
  )
 }
}

export default NewsSlider;