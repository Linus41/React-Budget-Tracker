import React, { Component } from "react";
import "./style.css"


class Table extends Component {
    state = {
        budgetItem: "",
        itemExpense: ""
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
                           
                            <td>{this.props.budgetItem}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;