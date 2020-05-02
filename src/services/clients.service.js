import PubSub from 'pubsub-js';

import $http from './http.service';

import { CONTEXT_TOPIC } from '../contexts/clients.context';

const slug = '/users';

/**
 * Fetch all clients and store it on clients context
 *
 * @returns {Promise<void>}
 */
async function fetchAll() {
  try {
    const { data } = await $http.get(slug);
    const clients = data.map((each) => ({
      ...each,
      company: each.company.name,
    }));
    PubSub.publish(CONTEXT_TOPIC, clients);
  } catch (ex) {
    // TODO show error message
    console.dir(ex);
  }
}

export default { fetchAll };
