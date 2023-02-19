import style from '../css/row.module.css'

export default function Row({row}){

    const toggleCheck = (e)=>{
        const status = e.target.checked
        e.target.checked = !status
        console.log(status)
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