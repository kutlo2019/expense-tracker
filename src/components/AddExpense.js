import { useState } from "react"

const AddExpense = ({ expenses, onAdd }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        if (!description) {
            alert('Please add a description')
            return
        }

        const id = expenses[expenses.length - 1].id + 1;
        console.log(transaction)
        const category = null
        onAdd({ description, transType: transaction, cost, category, id })

        setDescription('')
        setCost(0)
    }

    const formStyle = {
        "backgroundColor": "#0033cc",
        "color": "#000",
        "padding": "2rem",
        "borderRadius": "1rem",
        "fontSize": "1.2rem",
        "fontFamily": "Open Sans"
    }

    const submitStyle = {
        "backgroundColor": "#ff9900", 
        "color": "#000",
        "display": "block", 
        "marginLeft": "auto",
        "marginRight": "auto" 
    }

    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)
    const [transaction, setTransaction] = useState('')
    return (
        <form onSubmit={onSubmit} style={formStyle} className="">
            <div>
                <label>Expense Description</label> <br />
                <input
                    type='text'
                    placeholder='Add Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Cost</label> <br />
                <input
                    type='number'
                    placeholder='Add cost'
                    value={cost}
                    onChange={(e) => setCost(Number(e.target.value))}
                />
            </div>
            <div>
                <label for="transType">Transaction Type</label>
                <br />
                <div className="d-flex justify-content-around">
                    <div>
                        <input
                            id="card"
                            type="radio"
                            name="transType"
                            value={transaction}
                            onChange={(e) => setTransaction('card')}
                        />
                        <label for="card">Card</label>
                    </div>

                    <div>
                        <input
                            id="cash"
                            type="radio"
                            name="transType"
                            value={transaction}
                            onChange={(e) => setTransaction('cash')}
                        />
                        <label for="cash">Cash</label>
                    </div>

                </div>
                {/* <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                /> */}
            </div>

            <input type='submit' value='Save Expense' className='btn' style={submitStyle} />
        </form>
    )
}

export default AddExpense
