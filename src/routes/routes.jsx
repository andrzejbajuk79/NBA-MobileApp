import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Layout from '../hoc/layout/layout'
import NewsArticles from './../components/articles/news-article/post/index';
import VideoArticle from './../components/articles/videos-articles/Video/index';

class Routes extends Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/articles/:id' exact component={NewsArticles} />
     <Route path='/videos/:id' exact component={VideoArticle} />
    </Switch>
   </Layout>
  )
 }
}
export default Routes
