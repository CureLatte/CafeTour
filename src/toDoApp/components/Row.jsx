import style from '../css/row.module.css'

export default function Row(){
    return (
        <div className={style.row}>
            <div className={style.contentWrapper}>
                <input className={style.checkBox} type="checkbox"/>
                <div className={style.content}>메모장 내용</div>
            </div>
            <img src="/images/trash.png" alt="trash" className={style.trashButton}></img>
        </div>
    )
}