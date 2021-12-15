import { FaPlusCircle } from 'react-icons/fa'

const AddButton = () => {

    const myStyle = {
        "fontSize": "1.2rem",
        "backgroundColor": "green",
        "padding": "0.3rem 0.3rem",
        "borderRadius": "0.9rem"
    }
    return (
        <div style={myStyle} className="mt-1">
            <FaPlusCircle /> Add
        </div>
    )
}

export default AddButton
