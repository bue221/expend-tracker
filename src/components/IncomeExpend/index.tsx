import React from "react";

const Income = () => {
  return (
    <div className="income_container">
      <div className="">
        <h3>Income</h3>
        <h3 className="Income-color">+$0.00</h3>
      </div>
      <div className="Divider"></div>
      <div className="">
        <h3>Expense</h3>
        <h3 className="expense-color">-$0.00</h3>
      </div>
    </div>
  );
};

export default Income;
