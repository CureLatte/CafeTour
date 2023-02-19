import backgroundStyle from '../css/background.module.css'
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react";

export default function Background(){
    const [contentType, setContentType] = useState(0)


    return (
        <div className={backgroundStyle.background}>
            <div className={backgroundStyle.container}>
                <Header setType={setContentType}></Header>
                <Content type={contentType}></Content>
                <Footer></Footer>
            </div>
        </div>
    )
}