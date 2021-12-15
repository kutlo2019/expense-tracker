
const Footer = () => {
    const footerStyle = {
        "marginTop": "2rem",
        "backgroundColor": "#000",
        "color": "#fff",
        "padding": "1rem",
        "borderRadius": "1rem"
    }
    return (
        <footer style={footerStyle} className="page-footer font-small blue">

            <div className="container-fluid text-center text-md-left">

                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Financial Friend</h5>
                        <p>Here to help with your financials.</p>

                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"> Expense Masters</a>
            </div>

        </footer>
    )
}

export default Footer
