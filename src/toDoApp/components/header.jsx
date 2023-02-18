import style from  '../css/header.module.css'
import Tab from './Tab.jsx'

export default function Header(){


    return (
        <div className={style.header}>
            <img src='/images/darkMode.png' alt="error" className={style.darkMode}/>
            <div className={style.tabsContainer}>
                <Tab title="All"></Tab>
                <Tab title="Activate"></Tab>
                <Tab title="Completed"></Tab>
            </div>
        </div>
    )
}