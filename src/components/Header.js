import AddButton from "./AddButton"

const Header = () => {

    const myStyles = {
        "backgroundColor": "#000",
        "color": "#fff",
        "padding": "2rem",
        "borderRadius": "1rem"
    }
    return (
        <div className="h1 text-center d-flex justify-content-around" style={myStyles}>
            <h1>Expense Tracker</h1>
            <AddButton />
        </div>
    )
}

export default Header
