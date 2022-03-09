import React, { createContext, useContext, useReducer, useMemo } from "react";

import reducer from "../store/reducer";
import { initialState } from "../store/initialState";

export const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <>
      <todosContext.Provider value={value}>{children}</todosContext.Provider>
    </>
  );
};

export const useSelector = (callback) => {
  const { state } = useContext(todosContext);
  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(todosContext);
  return dispatch;
};
