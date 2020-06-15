import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    budgetItem: "",
    itemExpense: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.budgetItem || !this.state.itemExpense) {
      alert("Please enter an item and its cost");
    } 

    this.setState({
      budgetItem: "",
      itemExpense: ""
    
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Welcome to Budget Tracker!
        </p>
        <form>
          <input
            value={this.state.budgetItem}
            name="budgetItem"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Budget Item"
          />
          <input
            value={this.state.itemExpense}
            name="itemExpense"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Item Expense (in dollars)"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
