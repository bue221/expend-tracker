import React, { useContext } from "react";
import { GlobalContext } from "../../global-state";

const TransationList = () => {
  const { transations, deleteTransition } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="container_history">
        {transations.map((item) => (
          <li
            className={`item-list ${item.amount > 0 ? "plus" : "minus"}`}
            key={item.id}
          >
            {item.text} <span>${item.amount}</span>
            <button
              className="del-btn"
              onClick={() => deleteTransition(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransationList;
