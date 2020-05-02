import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Photos, Posts, NotFound } from './pages';

export default function () {
  return (
    <Switch>
      <Route path="/:userId/fotos" component={Photos} />
      <Route path="/:userId/posts" component={Posts} />

      <Route path="/erro/nao-encontrado" component={NotFound} />

      <Redirect from="/" to="/1/fotos" exact />

      <Redirect from="/fotos" to="/1/fotos" />
      <Redirect from="/posts" to="/1/posts" />

      <Redirect to="/erro/nao-encontrado" />
    </Switch>
  );
}
