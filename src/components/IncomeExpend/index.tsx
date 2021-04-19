import React, { useContext } from "react";
import { GlobalContext } from "../../global-state";

const Income = () => {
  const { transations } = useContext(GlobalContext);

  const income = transations
    .filter((item) => item.amount > 0)
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);
  const expend = transations
    .filter((item) => item.amount < 0)
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="income_container">
      <div className="">
        <h3>Income</h3>
        <h3 className="Income-color">+${income}</h3>
      </div>
      <div className="Divider"></div>
      <div className="">
        <h3>Expense</h3>
        <h3 className="expense-color">-${Math.abs(expend)}</h3>
      </div>
    </div>
  );
};

export default Income;
