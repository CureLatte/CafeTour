import React, {useState} from 'react'


export default function Counter({allCount, setAllCount}){
    const [number, setNumber] = useState(0);
    return (
        <div className='counter'>
            <span className='number'>
                <span className='currentCount'>{number}</span>
                <span className='allCount'>/{allCount}</span>
            </span>
            <button className='button' onClick={()=>{
                setNumber(number + 1 )
                setAllCount(allCount + 1)
            }}>Add + </button>
        </div>
    )
}