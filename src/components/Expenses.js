const Expenses = () => {
    const myStyle = {
        "backgroundColor": "#5f5f5f",
        "color": "#fff",
        "padding": "1rem",
        "borderRadius": "1rem"
    }
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
                    <tr>
                        <td colSpan="15">1. Coffee</td>
                        <td> card</td>
                        <td className="text-center"> 23.50</td>
                    </tr>
                    <tr>
                        <td colSpan="15">2. Cab</td>
                        <td> cash</td>
                        <td className="text-center"> 70.00</td>
                    </tr>
                    <tr>
                        <td colSpan="15">3. Lunch</td>
                        <td> card</td>
                        <td className="text-center"> 63.50</td>
                    </tr>
                    <tr>
                        <td colSpan="15"></td>
                        <td> <strong>Total</strong></td>
                        <td className="text-center"> 157.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Expenses
