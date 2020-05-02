import React, { createContext, useContext, useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
import PropTypes from 'prop-types';

const INITIAL_STATE = false;
const LoaderContext = createContext(INITIAL_STATE);

export const CONTEXT_TOPIC = 'loaderContext';

export function LoaderContextProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);
  const subscriber = (_, data) => setState(data);

  useEffect(() => {
    const token = PubSub.subscribe(CONTEXT_TOPIC, subscriber);
    return () => PubSub.unsubscribe(token);
  }, []);

  return (
    <LoaderContext.Provider value={{ state, setState }}>
      {children}
    </LoaderContext.Provider>
  );
}
LoaderContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Returns loader context exposed values
 *
 * @typedef {Object} LoaderContextValues
 * @property {Object} state Current state of Loader Context
 * @property {Function} setState Method to update Loader Context state
 *
 * @returns {LoaderContextValues} loaderContextValues The context state
 */
export const useLoader = () => {
  const { state, setState } = useContext(LoaderContext);
  return { state, setState };
};
