import React, { Component } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
// import Total from "./components/Total/Total";

class App extends Component {

  state = {
    budgetItem: [],
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.id]: value
    });

  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let items = [...this.state.budgetItem];
    

    items.push({
      budgetItem: this.state.budgetItem
    });

    this.setState({
      items
    })

    // this.setState({
    //   budgetItem: "",
    //   itemExpense: ""
    // });
  };



  render() {
    //need a const for array here?
    const budgetArray = this.state.budgetItem
    return (
      <div>
        <Form />
        <Table budgetItem={budgetArray} />
        {/* <Total /> */}
      </div>
    );
  }
}

export default App;
