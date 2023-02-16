import style from '../css/footer.module.css'

export default function Footer(){
    return (
        <div className={style.container}>
            <div className={style.searchBar}>
                <input type="text" className={style.searchInput} placeholder=""/>
                <span className={style.searchTitle}>Add</span>
            </div>
        </div>
    )
}