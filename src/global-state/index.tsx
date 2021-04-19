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
};

// estado inicial
const initialState = {
  transations: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
  ],
};

// se crea el contexto
export const GlobalContext = createContext<initialStateProps>(initialState);

//se crea el componente provider
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  type Dispatch = {
    type: String;
    payload: number;
  };

  const deleteTransition = (id: number) => {
    dispatch<Dispatch>({
      type: "DELETE_TRANSITION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider value={{ transations: state.transations }}>
      {children}
    </GlobalContext.Provider>
  );
};
