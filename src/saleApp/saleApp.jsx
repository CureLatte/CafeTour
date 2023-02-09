import {useEffect, useState} from 'react'
import './app.css'
import ErrorComponent from "./components/error";
import Loading from "./components/loading";


export default function SaleApp(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [item, setItem] = useState([]);
    const [toggle, setToggle] = useState(true)

    const getDataApi = async ()=>{
        const fileName = toggle ? 'items' : 'sale'
        const response = await fetch(`/data/${fileName}.json`)
        const result = await response.json()
        console.log('hello')
        setItem(result)
    }

    const buttonToggle = ()=>{
        setToggle((prev)=>(!prev))
    }

    useEffect(() => {
        setLoading(true)
        setError(undefined)
        getDataApi()
            .catch((err)=>{setError(err)})
            .finally(()=>setLoading(false))
        return () => {

        };
    }, [toggle]);

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