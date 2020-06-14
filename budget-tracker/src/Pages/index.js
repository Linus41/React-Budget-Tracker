import React, { useState } from "react";
// import Container from "./components/Container";
// import Col from "./components/Col";
// import Row from "./components/Row";

const Budget = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const [budgetItem, setBudgetItem] = useState("")
  const [dollarAmount, setDollarAmount] = useState("")


  return (
    <div>
      <div className="mt-4">
        <h2>Budget Tracker</h2>
      </div>
      <form onSubmit={handleSubmit}>


        <input className="form-control"
          type="text"
          placeholder="Budget Item"
          name="budget-item"
          onChange={event => setBudgetItem(event.target.value)}></input>


        <input
          className="form-control"
          type="text"
          placeholder="Dollar Amount"
          name="dollar-amount"
          onChange={event => setDollarAmount(event.target.value)}
        />

        <button className="btn btn-success" type="submit">
          Submit
          </button>



      </form>
      <div>
        table goes here
    </div>
    <div>
      running total goes here
    </div>
    </div>

  );
};

export default Budget;
