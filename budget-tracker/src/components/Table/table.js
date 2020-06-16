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
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>Budget Item</th>
                            <th>Expense Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                         {/* use map to loop through all expenses  */}
                        <tr>
                           
                            <td></td>
                            <td>hello</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;