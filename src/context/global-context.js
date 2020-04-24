import React, { useReducer, useEffect, useState } from "react";

export const GlobalContext = React.createContext(null);

const initState = {};

function reducer(state, action) {
  switch (action.type) {
    case "SORT":
      return state;
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
