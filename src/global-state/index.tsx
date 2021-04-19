import { type } from "node:os";
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//interfaces
type transition = {
  id: number;
  text: string;
  amount: number;
};

type initialStateProps = {
  transations: transition[];
  deleteTransition: Function;
  addTransation: Function;
};

// estado inicial
const initialState = {
  transations: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
  ],
  deleteTransition: (id: number) => id + 1,
  addTransation: (transation: { text: string; amount: number }) => {
    return transation;
  },
};

// se crea el contexto
export const GlobalContext = createContext<initialStateProps>(initialState);

//se crea el componente provider
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const deleteTransition = (id: number) => {
    dispatch({
      type: "DELETE_TRANSITION",
      payload: id,
    });
  };

  const addTransation = (transaction: { text: string; amount: number }) => {
    dispatch({
      type: "ADD_TRANSATION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transations: state.transations,
        deleteTransition,
        addTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
