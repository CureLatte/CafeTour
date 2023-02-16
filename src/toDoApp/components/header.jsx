import style from  '../css/header.module.css'

export default function Header(){


    return (
        <div className={style.header}>
            <img src='/images/darkMode.png' alt="error" className={style.darkMode}/>
            <div className={style.tabsContainer}>
                <span className={style.tabs}>
                    <p>All</p>
                    <div className={style.tabsBar}/>
                </span>

                <span className={style.tabs}>
                    <p>active</p>
                    <div className={style.tabsBar}/>
                </span>
                <span className={style.tabs}>
                    <p>completed</p>
                    <div className={style.tabsBar}/>
                </span>
            </div>
        </div>
    )
}