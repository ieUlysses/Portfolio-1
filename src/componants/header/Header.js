import "./Header.css"

function Header(props) {
    return (
        <div className="header">
            <h1 className="h1-open">&lt;h1&gt;</h1>
            <h1 className="s-name">{props.id}</h1>
            <h1 className="h1-close">&lt;/h1&gt;</h1>
        </div>
    )
}

export default Header