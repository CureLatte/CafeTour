import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppCounter from "./counterApp/App/AppCounter";
import reportWebVitals from "./reportWebVitals";
import MouseApp from "./MouseApp/MouseApp";
import AppMentor from "./mentorApp/AppMentor";
import AppMentors from "./mentorsApp/AppMentors"
import AppMentorsImmer from "./mentorsApp/AppMentorsImmer";
import AppTheme from "./AppTheme/AppTheme";

// 전역 설정이 가능함

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppTheme />
    </React.StrictMode>
);
reportWebVitals();
