import React, { Component } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Total from "./components/Total/Total";

class App extends Component {

  state = {
    budgetItems: [],
    expense: ""
  }

  addBudgetItem = item => {
    this.setState({ budgetItems: [...this.state.budgetItems, item] })
    console.log("budget items", this.state.budgetItems);
  }
  addExpense = item => {
    this.setState({ expense: [...this.state.expense, item]})
  }


  render() {
    return (
      <div>
        {/* this addBudgetItem could be called anything, as long as it is called the same thing in form.js as props; this.addBudgetItem refers to the addBudgetItem method on line 12 in this file */}
        <Form addBudgetItem={this.addBudgetItem} />
        <Table budgetItem={this.state.budgetItems} />
        <Total budgetItem={this.state.budgetItems}/>
      </div>
    );
  }
}

export default App;
