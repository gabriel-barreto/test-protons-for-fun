import React, { createContext, useContext, useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
import PropTypes from 'prop-types';

export const CONTEXT_TOPIC = 'clientContext';

const INITIAL_STATE = [];
const ClientContext = createContext(INITIAL_STATE);

export function ClientContextProvider({ children }) {
  const [clients, setClients] = useState(INITIAL_STATE);
  const subscriber = (_, data) => setClients(data);

  useEffect(() => {
    const token = PubSub.subscribe(CONTEXT_TOPIC, subscriber);
    return () => PubSub.unsubscribe(token);
  }, []);

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientContext.Provider>
  );
}
ClientContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Returns the client context exposed values
 *
 * @typedef {Object} ClientContextValues
 * @property {Array} clients List of fetched clients
 * @property {Function} setClients Method to update clients list
 *
 * @returns {ClientContextValues} The Client Context Values
 */
export const useClients = () => {
  const { clients, setClients } = useContext(ClientContext);
  return { clients, setClients };
};
