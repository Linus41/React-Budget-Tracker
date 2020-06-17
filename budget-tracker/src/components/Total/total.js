import React, { Component } from "react";

class Total extends Component {
    state = {
        expense: 0
    }

    render() {
        return (
            <div>
                {this.props.budgetItem.map(budget => (
                <tr>
                   
                    <td>{budget.itemExpense}</td>
                </tr>
            ))}
            </div>

        )
    }
}


export default Total;