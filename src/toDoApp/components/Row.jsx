import style from '../css/row.module.css'
import {useState} from "react";

export default function Row({row}){
    console.log('row: ', row)
    const initCheck = row.check
    const [check, setCheck] = useState(initCheck)
    const toggleCheck = ()=>{
        setCheck((prevCheck)=>!prevCheck)
    }


    return (
        <div className={style.row}>
            <div className={style.contentWrapper}>
                <input className={style.checkBox} type="checkbox" checked={check} onChange={toggleCheck}/>
                <div className={style.content}>{row.title}</div>
            </div>
            <img src="/images/trash.png" alt="trash" className={style.trashButton}></img>
        </div>
    )
}