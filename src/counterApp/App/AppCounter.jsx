import Counter from "../componants/Counter";
import { useState } from "react";

const AppCounter = () => {
    const [allCount, setAllCount] = useState(0);

    const check = () => {
        setAllCount((prev) => prev + 1);
    };

    return (
        <div>
            <div className="CounterStatus">
                <div>
          Total Count: {allCount} {allCount >= 10 ? "&#128156;" : "&#128155;"}
                </div>
            </div>
            <Counter allCount={allCount} onClick={check} />
            <Counter allCount={allCount} onClick={check} />
        </div>
    );
};

export default AppCounter;
