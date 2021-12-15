import Expense from "./Expense"

const Expenses = ({ expenses }) => {
    const myStyle = {
        "backgroundColor": "#5f5f5f",
        "color": "#fff",
        "padding": "1rem",
        "lineHeight": "3.5rem",
        "borderRadius": "1rem"
    }
    
    let total = 0
    expenses.forEach(expense => {
        total += expense.cost
    });

    return (
        <div className="container-flex mt-3" style={myStyle}>
            <table width="100%">
                <thead>
                    <tr>
                        <th colSpan="15">Description</th>
                        <th >Type</th>
                        <th className="text-center">Amount (Pula)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => {
                        return <Expense key={expense.id} expense={expense} />
                    })}
                    <tr>
                        <td colSpan="15"></td>
                        <td> <strong>Total</strong></td>
                        <td className="text-center"> {total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Expenses
