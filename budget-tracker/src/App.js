import React, { Component } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
// import Total from "./components/Total/Total";

class App extends Component {

  state = {
    budgetItems: [],
  }

  addBudgetItem = item => {
    this.setState({budgetItems: [...this.state.budgetItems, item]})
    console.log(this.state.budgetItems);
  }

  render() {
    //need a const for array here?
    // const budgetArray = this.state.budgetItems
    return (
      <div>
        {/* this addBudgetItem could be called anything, as long as it is called the same thing in form.js as props; this.addBudgetItem refers to the addBudgetItem method on line 12 in this file */}
        <Form addBudgetItem={this.addBudgetItem}/>
        <Table budgetItem={this.state.budgetItems} />
        {/* <Total /> */}
      </div>
    );
  }
}

export default App;
