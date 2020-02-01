import React from 'react'
import NewsSlider from '../../../widgets/news-slider/newsSlider'
import NewsList from '../../../widgets/newsList/newsList '

const NewsMain = () =>(
<div>
<NewsSlider
type='featured'
settings={{dots:false}}
start={0}
amount={3}
/>
<NewsList
type='cardMain'
loadmore={true}
start={0}
amount={5}
/>
</div>

)
export  default NewsMain;