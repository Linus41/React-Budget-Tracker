import React, { Component } from "react";
import "./style.css"
// import Form from "./components/Form/Form";

class Table extends Component {
    state = {
        budgetItem: [],
        itemExpense: []
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
                        <td>{this.props.budgetItem}</td>
                        <td>{this.props.itemExpense}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;