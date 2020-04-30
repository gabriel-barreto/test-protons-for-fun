import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = [];
const ClientContext = createContext(INITIAL_STATE);

export function ClientContextProvider({ children }) {
  const [clients, setClients] = useState(INITIAL_STATE);

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
