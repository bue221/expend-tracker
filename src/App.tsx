import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import Income from "./components/IncomeExpend";
import TransationList from "./components/TransationList";
import FormTransation from "./components/FormTransation";

import "./App.css";
import { GlobalProvider } from "./global-state";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="expense-card">
          <Header />
          <Balance />
          <Income />
          <TransationList />
          <FormTransation />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
