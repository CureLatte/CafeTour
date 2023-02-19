import style from "../css/header.module.css";
import {useEffect, useRef} from "react";

export default function Tab({title, onclick}){
    const tabTitle = useRef(null)
    const tabBar = useRef(null)

    useEffect(() => {
        // px 길이 세팅
        tabBar.current.style.width=tabTitle.current.clientWidth.toString() + "px"
        return () => {

        };
    }, []);


    return (
        <span className={style.tabs} ref={tabTitle} onClick={onclick}>
            <p>{title}</p>
            <div className={style.tabsBar} ref={tabBar}/>
        </span>
    )
}