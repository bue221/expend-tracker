import React, { useContext, useState } from "react";
import { GlobalContext } from "../../global-state";

const FormTransation = () => {
  const { addTransation } = useContext(GlobalContext);

  const [formInfo, setFormInfo] = useState({
    text: "",
    amount: 0,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newElement = {
      id: Math.floor(Math.random() * 1000000),
      amount: +formInfo.amount,
      text: formInfo.text,
    };
    addTransation(newElement);
    setFormInfo({
      text: "",
      amount: 0,
    });
  };
  return (
    <div>
      <h3 className="title_form">Add a new transation</h3>
      <form className="container_form" onSubmit={handleSubmit}>
        <div className="flex-cl">
          <label>Text</label>
          <input
            type="text"
            id="text"
            name="text"
            onChange={handleChange}
            value={formInfo.text}
            placeholder="Enter a text..."
          />
        </div>
        <div className="flex-cl">
          <label>
            Amount <br />
            (negative-expense, positive-income)
          </label>
          <input
            id="amount"
            name="amount"
            onChange={handleChange}
            value={formInfo.amount}
            type="number"
          />
        </div>
        <button type="submit">Add a transation</button>
      </form>
    </div>
  );
};

export default FormTransation;
