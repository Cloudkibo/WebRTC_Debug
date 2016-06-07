import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';
import ErrorDetailView from './container/ErrorsDetailView/ErrorsDetailView';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PostContainer} />
    <Route path="/post/:slug" component={PostDetailView}/>
    <Route path="/errors" component={ErrorDetailView}/>
  </Route>
);

export default routes;
