import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Photos, Posts } from './pages';

export default function () {
  return (
    <>
      <Route to="/:userId/photos" component={Photos} />
      <Route to="/:userId/posts" component={Posts} />
      <Redirect to="/:userId/photos" />
    </>
  );
}
