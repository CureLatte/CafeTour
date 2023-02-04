import "./App.css";
import { useEffect, useState} from "react";

function MouseApp() {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const updateXY = (e)=>{
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }
    return (
        <div className="container" onPointerMove={updateXY}>
            <div className="pointer" style={{transform: `translate(${mouseX}px, ${mouseY}px)`}}></div>
        </div>
    );
}

export default MouseApp;
