import axios from 'axios';
import PubSub from 'pubsub-js';

import { CONTEXT_TOPIC as LoaderContextTopic } from '../contexts/loader.context';

const $http = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

$http.interceptors.request.use((config) => {
  PubSub.publish(LoaderContextTopic, true);
  return config;
});

$http.interceptors.response.use(
  (res) => {
    PubSub.publish(LoaderContextTopic, false);
    return res;
  },
  (err) => {
    PubSub.publish(LoaderContextTopic, false);
    throw err.response;
  },
);

export default $http;
