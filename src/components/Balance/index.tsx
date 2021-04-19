import React, { useContext } from "react";
import { GlobalContext } from "../../global-state";

const Balance = () => {
  const { transations } = useContext(GlobalContext);

  const amounts = transations.map((item) => item.amount);
  const total = amounts.reduce((a, b) => a + b, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h2 id="balnce">${total}</h2>
    </>
  );
};

export default Balance;
