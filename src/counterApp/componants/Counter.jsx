import React, {useState} from 'react'


export default function Counter({allCount, onClick}){
    const [number, setNumber] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>
                {number}
                <span className='allCount'>/{allCount}</span>
            </p>
            <button className='button' onClick={()=>{
                setNumber(number + 1 )
                onClick();
            }}>Add + </button>
        </div>
    )
}