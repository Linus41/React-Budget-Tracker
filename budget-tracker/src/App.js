import React, { Component } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
// import Total from "./components/Total/Total";

class App extends Component {
  
  state = {
    budgetItem: [],
    itemExpense: []
  }

  
  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.budgetItem];
    let expense = [...this.state.itemExpense];

    items.push({
      budgetItem: this.state.budgetItem
    });

    expense.push({
      itemExpense: this.state.itemExpense
    })

    this.setState({
      budgetItem: "",
      itemExpense: ""
    });
  };

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  render() {
  return (
    <div><Form />
    <Table />
    {/* <Total /> */}
    </div>
  );
  }
}

export default App;
