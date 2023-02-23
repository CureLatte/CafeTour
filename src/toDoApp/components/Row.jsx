import style from '../css/row.module.css'
import {useState} from "react";

export default function Row({rowData}){
    const [row, setRow] = useState(rowData)

    const toggleCheck = (e)=>{
        const status = e.target.checked
        console.log(status)
        setRow(prev=>({...prev, check:!status}))
        console.log('target',e.target)

    }

    return (
        <div className={style.row}>
            <div className={style.contentWrapper}>
                <input className={style.checkBox} type="checkbox" checked={row.check || false} onChange={toggleCheck}/>
                <div className={style.content}>{row.title}</div>
            </div>
            <img src="/images/trash.png" alt="trash" className={style.trashButton}></img>
        </div>
    )
}