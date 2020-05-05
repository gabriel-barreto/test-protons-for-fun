import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {};
const ActiveClientContext = createContext(INITIAL_STATE);

export function ActiveClientContextProvider({ children }) {
  const [current, setActiveClient] = useState(INITIAL_STATE);

  return (
    <ActiveClientContext.Provider value={{ current, setActiveClient }}>
      {children}
    </ActiveClientContext.Provider>
  );
}
ActiveClientContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Returns the context values
 *
 * @typedef {object} ActiveClientValues
 * @property {object} current Current Active Client
 * @property {function} setActiveClient Method to update current active client
 *
 * @returns {ActiveClientValues}
 */
export const useActiveClient = () => {
  const { current, setActiveClient } = useContext(ActiveClientContext);
  return { current, setActiveClient };
};
