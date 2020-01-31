import React, { Component } from 'react';
import axios from 'axios'
import SliderTemplate from './sliderTemplate';
import { URL } from '../../../utils/config';

 class NewsSlider extends Component {
  state={
   news:[]
  }

  componentDidMount(){
   const {start,amount}  = this.props;
   axios.get(`${URL}/articles?_start=${start}^&_end=${amount}`)
   .then(response=> this.setState({news:response.data}))
  }
 render() {
  const {type,settings}  = this.props;
  const { news } =this.state;
  return (
   <div>
    <SliderTemplate data={news} type={type} settings={settings}/>
   </div>
  )
 }
}

export default NewsSlider ;