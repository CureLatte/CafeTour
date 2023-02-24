import style from '../css/row.module.css'
import {useState} from "react";
import toDoListJson from "../data/toDoList.json"

export default function Row({rowData}){
    const [row, setRow] = useState(rowData)

    const toggleCheck = (e)=>{
        const row_id = e.target.id.split('_')[1]
        console.log('id ', row_id)
        const row_data = toDoListJson.filter((content)=>content.id===row_id)
        const status = row_data[0].check
        console.log('row Data!', row_data[0].check=!status)
        setRow(prev=>({...prev, check:!status}))
        console.log('target', e.target)

    }

    return (
        <div className={style.row}>
            <div className={style.contentWrapper}>
                <input className={style.checkBox} type="checkbox" checked={row.check || false} id={'row_' + row.id} onChange={toggleCheck}/>
                <div className={style.content}>{row.title}</div>
            </div>
            <img src="/images/trash.png" alt="trash" className={style.trashButton}></img>
        </div>
    )
}