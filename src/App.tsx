import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import Income from "./components/IncomeExpend";
import TransationList from "./components/TransationList";
import FormTransation from "./components/FormTransation";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="expense-card">
        <Header />
        <Balance />
        <Income />
        <TransationList />
        <FormTransation />
      </div>
    </div>
  );
};

export default App;
