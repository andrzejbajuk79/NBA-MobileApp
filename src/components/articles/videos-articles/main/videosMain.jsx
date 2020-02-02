import React from 'react'
import VideosList from '../../../widgets/videos-list/videosList'

 const VideosMain = () => {
 return (
  <div>
  <VideosList
  title={true}
  type='card'
  loadmore={true}
  start={0}
  amount={10}
 />
  </div>
 )
}

export default  VideosMain;