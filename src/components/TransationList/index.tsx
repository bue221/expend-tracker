import React from "react";

const TransationList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="container_history">
        <li>
          Cash <span>-$400</span>
          <button>x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransationList;
