import Button from "./Button"

const Header = ({ onAdd, showForm }) => {

    const myStyles = {
        "backgroundColor": "#000",
        "color": "#fff",
        "padding": "2rem",
        "borderRadius": "1rem"
    }
    return (
        <div 
            className="h1 text-center d-flex justify-content-around" 
            style={myStyles}
            onClick={() => onAdd(showForm)}
        >
            <h1>Expense Tracker</h1>
            <Button
                color={showForm ? 'red' : 'green'}
                text={showForm ? 'Close' : 'Add'}
                icon={showForm ? 'close' : 'add'}
            />
        </div>
    )
}

export default Header
