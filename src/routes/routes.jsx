import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Layout from '../hoc/layout/layout'
import NewsArticles from './../components/articles/news-article/post/index';

class Routes extends Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/articles/:id' exact component={NewsArticles} />
    </Switch>
   </Layout>
  )
 }
}
export default Routes
