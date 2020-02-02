import React, { Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Layout from '../hoc/layout/layout'
import NewsArticles from './../components/articles/news-article/post/index';
import VideoArticle from './../components/articles/videos-articles/Video/index';
import NewsMain from '../components/articles/news-article/main/NewsMain';
import VideosMain from './../components/articles/videos-articles/main/videosMain';
import SignIn from './../components/sign-in/signIn';

class Routes extends Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/news' exact component={NewsMain} />
     <Route path='/sign-in' exact component={SignIn} />
     <Route path='/videos' exact component={VideosMain} />
     <Route path='/articles/:id' exact component={NewsArticles} />
     <Route path='/videos/:id' exact component={VideoArticle} />
    </Switch>
   </Layout>
  )
 }
}
export default Routes
