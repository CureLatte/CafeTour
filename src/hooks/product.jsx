import {useEffect, useState} from "react";

export default function useProduct({checked}){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [item, setItem] = useState([]);


    const getDataApi = async ()=>{
        const fileName = checked ? 'items' : 'sale'
        const response = await fetch(`/data/${fileName}.json`)
        const result = await response.json()
        setItem(result)
    }

    useEffect(() => {
        setLoading(true)
        setError(undefined)
        getDataApi()
            .catch((err)=>{setError(err)})
            .finally(()=>setLoading(false))
        return () => {

        };
    }, [checked]);

    return [loading, error, item]
}