import { useState} from 'react'
import './app.css'
import ErrorComponent from "./components/error";
import Loading from "./components/loading";
import useProduct from "../hooks/product";


export default function SaleApp(){
    const [toggle, setToggle] = useState(true)
    const [loading, error, item] = useProduct({checked:toggle})

    const buttonToggle = ()=>{
        setToggle((prev)=>(!prev))
    }


    if (loading) return <Loading/>

    if (error) return <ErrorComponent/>

    return (
        <div className="container">
            <div className="header">세일 품목들!</div>
            <div>
                {item.map((item, index)=>{
                    return <li key={index}>{item.name} : {item.price}</li>
                })}
            </div>
            <button className="toggleButton" onClick={buttonToggle}>{toggle? '세일 목록 보기!': '전체 목록 보기'}</button>
        </div>
    )
}