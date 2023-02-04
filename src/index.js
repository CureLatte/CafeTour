import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppCounter from "./counterApp/App/AppCounter";
import reportWebVitals from "./reportWebVitals";
import MouseApp from "./MouseApp/MouseApp";
import AppMentor from "./MouseApp/componants/AppMentor";
import AppMentors from "./MouseApp/componants/AppMentors"

// 전역 설정이 가능함

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppMentors />
    </React.StrictMode>
);
reportWebVitals();
