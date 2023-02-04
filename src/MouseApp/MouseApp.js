import "./App.css";
import { useEffect, useState} from "react";

function MouseApp() {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const getXY = (event)=>{
        setMouseX(event.clientX)
        setMouseY(event.clientY)
    }


    const updateXY = ()=>{
        const pointer = document.getElementsByClassName('pointer')[0]
        pointer.style.left = mouseX + 'px'
        pointer.style.top = mouseY + 'px'
    }
    useEffect(updateXY, [mouseX, mouseY])
    return (
        <div className="container" onMouseMove={getXY}>
            <div className="pointer"></div>
        </div>
    );
}

export default MouseApp;
