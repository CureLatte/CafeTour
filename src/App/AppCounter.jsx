import Counter from '../componants/Counter'
import {useState} from "react";

const AppCounter = ()=>{
    const [allCount, setAllCount] = useState(0)
    const [Count, setCount] = useState(0)

    return (
        <div>
            <div className='CounterStatus'> Count: {}</div>
            <Counter setAllCount={setAllCount} allCount={allCount}/>
            <Counter setAllCount={setAllCount} allCount={allCount}/>
        </div>
    )
}

export default AppCounter
