import { useState } from "react"

const AddExpense = ({ onAdd }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        if(!description) {
            alert('Please add a description')
            return
        }

        const id = Math.round((Math.random() + 1) * 10)
        onAdd({ description, cost, transaction, id})

        setDescription('')
        setCost(0)
    }

    const formStyle = {
        "backgroundColor": "#0033cc",
        "color": "#000",
        "padding": "2rem",
        "borderRadius": "5%",
        "fontSize": "1.2rem",
        "fontFamily": "Open Sans"
    }

    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)
    const [transaction, setTransaction] = useState('')
    return (
        <form onSubmit={onSubmit} style={formStyle}>
            <div>
                <label>Expense Description</label>
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
                    onChange={(e) => setCost(e.target.value)} 
                />
            </div>
            <div>
                <label>Transaction Type</label>
                <br/ >
                <div className="d-flex justify-content-around">
                    <div>
                        <input
                            id="card" 
                            type="radio" 
                            name="gender"
                            value={transaction}
                            onChange={(e) => setTransaction('card')}
                        />
                        <label for="card">Card</label>
                    </div>
                    
                    <div>
                        <input
                            id="cash" 
                            type="radio" 
                            name="gender"
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

            <input type='submit' value='Save Expense' className='btn' style={{"backgroundColor":"#ff9900"}} />
        </form>
    )
}

export default AddExpense
