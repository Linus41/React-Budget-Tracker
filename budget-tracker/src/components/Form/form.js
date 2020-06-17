import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    budgetItem: "",
    itemExpense: "",
    allBudgetInfo: []
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // console.log(name, value)

    // Updating the input's state
    this.setState({
      [name]: value
    });

  };
  //this function takes the current state of budgetItem and itemExpense and pushes into allBudgetInfo array on click of submit button
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //props here allows this file to access the addBudgetItem method from App.js
    
    this.props.addBudgetItem({budgetItem: this.state.budgetItem, itemExpense: this.state.itemExpense})

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
