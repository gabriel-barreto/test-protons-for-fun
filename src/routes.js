import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Photos, Posts, NotFound } from './pages';

export default function () {
  return (
    <Switch>
      <Route path="/:userId/photos" component={Photos} />
      <Route path="/:userId/posts" component={Posts} />

      <Route path="/erro/nao-encontrado" component={NotFound} />

      <Redirect to="/erro/nao-encontrado" />
    </Switch>
  );
}
