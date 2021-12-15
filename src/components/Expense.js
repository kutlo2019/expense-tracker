const Expense = ({ expense }) => {
    return (
        <tr>
            <td colSpan="15">{expense.id}. {expense.description}</td>
            <td> {expense.transType}</td>
            <td className="text-center"> {expense.cost}</td>
        </tr>
    )
}

export default Expense
