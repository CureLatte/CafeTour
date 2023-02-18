import Row from "./Row";
import style from '../css/content.module.css'
import {useEffect, useState} from "react";

export default function Content(){
    const [row, setRow] = useState([{}])

    const dataRequest = async ()=>{
        const dataResponse = await fetch('./toDoApp/data/toDoList.json')
        const dataJson = await dataResponse.json()
        console.log('data', dataJson)
        return dataJson
    }

    useEffect( ()=>{
        dataRequest()
            .then((result)=>{
                console.log('success', result)
                setRow(result)
            })
            .catch(()=>{
                console.log('fail')
            })
    }, [])


    return (
        <div className={style.content}>
            {row.map((rowData, index) => {
                return <Row key={index} row={rowData}/>
            })}
        </div>
    )
}