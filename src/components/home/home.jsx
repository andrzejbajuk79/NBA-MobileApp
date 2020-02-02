import React from 'react'
import NewsSlider from '../widgets/news-slider/newsSlider';
import NewsList from './../widgets/newsList/newsList ';
import VideosList from '../widgets/videos-list/videosList';


const Home = () => {
 return (
  <div>
   <NewsSlider
    type='featured'
    start={0}
    amount={4}
    settings={{
     dots: false
    }}
   />

 <NewsList
    type='card'
    loadmore={true}
    start={0}
    amount={3}
   />
 <VideosList
   title={true}
   type='card'
   loadmore={true}
   start={0}
   amount={3}
 /> 
  </div>
 )
}

export default Home;