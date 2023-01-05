import Counter from '../componants/Counter'
import {useState} from "react";

const AppCounter = ()=>{
    const [allCount, setAllCount] = useState(0)

    const check = (count)=>{
        console.log(count)
        if (count >= 10){
            return <span className='overCount'>  &#128156;</span>
        } else if( count >= 5){
            return <span className='overCount'>  &#128155;</span>
        }
    }

    return (
        <div>
            <div className='CounterStatus'>
                <span>Total Count: {allCount}</span>
                {check(allCount)}
            </div>
            <Counter setAllCount={setAllCount} allCount={allCount}/>
            <Counter setAllCount={setAllCount} allCount={allCount}/>
        </div>
    )
}

export default AppCounter
