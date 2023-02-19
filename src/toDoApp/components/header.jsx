import style from  '../css/header.module.css'
import Tab from './Tab.jsx'

export default function Header({setType}){
    const clickTab = (e)=>{
        console.log(e.target.innerText)
        const tabName = e.target.innerText
        if (tabName === 'Activate'){
            setType(1)
        } else if (tabName==='Completed'){
            setType(2)
        } else{
            setType(0)
        }
    }



    return (
        <div className={style.header}>
            <img src='/images/darkMode.png' alt="error" className={style.darkMode}/>
            <div className={style.tabsContainer}>
                <Tab title="All" onclick={clickTab}></Tab>
                <Tab title="Activate" onclick={clickTab}></Tab>
                <Tab title="Completed" onclick={clickTab}></Tab>
            </div>
        </div>
    )
}