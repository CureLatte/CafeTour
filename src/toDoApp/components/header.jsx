import '../css/header.modules.css'

export default function Header(){
    return (
        <div className="header">
            <img src='/images/darkMode.png' alt="error" className="darkMode"/>
            <div className="tabsContainer">
                <span className="tabs">All</span>
                <span className="tabs">active</span>
                <span className="tabs">completed</span>
            </div>
        </div>
    )
}