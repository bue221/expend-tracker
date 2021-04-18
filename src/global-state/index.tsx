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
    { id: 1, text: "Salary", amount: 30 },
    { id: 1, text: "Book", amount: -10 },
  ],
};

// se crea el contexto
export const GlobalContext = createContext<initialStateProps>(initialState);

//se crea el componente provider
interface IState {
  transations: Object;
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transations: state.transations }}>
      {children}
    </GlobalContext.Provider>
  );
};
