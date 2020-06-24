import React, { Component } from "react";
import "./style.css";

class Total extends Component {
    state = {
        expense: "",
        updatedExpense: ""
    }

    
    // handleInputChange = () => {
    //     //use props to access budgetItem from App, which is an array of objects
    //     //then pull itemExpense out of it using map
    //     //then set "expense" in state to itemExpense
    //     this.setState({expense: this.props.budgetItem})
    // }

    // runningTotal = () => {
    //     //set updatedExpense in state to state.expense plus itself? Or something?
    // }

    render() {
        let total = 0;
        (this.props.budgetItem.forEach(budget => {
            total = total + parseFloat(budget.itemExpense)
        }))

        return (
            <div className="total">
                <h1>${total}</h1>
        
                   
                
            </div>

        )
    }
}


export default Total;