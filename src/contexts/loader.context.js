import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = true;
const LoaderContext = createContext(INITIAL_STATE);

export function LoaderContextProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);
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

/**
 * Update loader context state
 * @param {Object} action values should be appended/updated on state
 * @returns {boolean}
 */
export const set = (action) =>
  Object.assign(INITIAL_STATE, { ...INITIAL_STATE, ...action });
