import React, { Component } from "react";
import "./style.css"
// import Form from "./components/Form/Form";

class Table extends Component {
    state = {
        budgetItem: "",
        itemExpense: ""
    };

    render() {
        
        return (
            <div>
                <table className="table">
                    <tr>
                        <th>Budget Item</th>
                        <th>Expense Amount</th>
                    </tr>
                    <tr>
                        <td>{this.state.itemExpense}</td>
                        <td>Hello</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;