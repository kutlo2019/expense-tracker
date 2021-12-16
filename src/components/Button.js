import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'

const Button = ({ icon, text, color, showForm}) => {

    const myStyle = {
        "fontSize": "1.2rem",
        "backgroundColor": color,
        "margin": "auto auto",
        "padding": "0.5rem",
        "borderRadius": "0.9rem"
    }

    let myElement = undefined
    if (icon === 'add') {
        myElement = <FaPlusCircle />
    } else {
        myElement = <FaTimesCircle />
    }
    return (
        <div style={myStyle}>
            {myElement} {text}
        </div>
    )
}

export default Button
