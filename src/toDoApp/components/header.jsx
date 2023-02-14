import style from  '../css/header.module.css'

export default function Header(){
    return (
        <div className={style.header}>
            <img src='/images/darkMode.png' alt="error" className={style.darkMode}/>
            <div className={style.tabsContainer}>
                <span className={style.tabs}>All</span>
                <span className={style.tabs}>active</span>
                <span className={style.tabs}>completed</span>
            </div>
        </div>
    )
}