export const Navbar = (props) => {

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div>
                <a className="navbar-brand">To-Do list</a>
                <button className = "btn" onClick={props.handleShow}>
                    Create new Task
                </button>
            </div>
            <div>
                <button className="btn" onClick={props.logout}>
                    Logout
                </button>
            </div>
        </div>
    </nav>
}